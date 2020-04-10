import React, { Component } from 'react'
import Main from '../template/Main'
import axios from 'axios'
import RenderTable from './RenderTable'


import FormUser from './FormUser'

const headerProps = {
    icon:'users',
    title:'Utilisateurs',
    subtitle:'Enregistrement des utilisateurs dans un formulaire: créer, lire, mettre à jour et supprimer'
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: '' },
    list: []
}

export default class UserCrud extends Component{

    state = {...initialState}

    componentDidMount(){
        axios(baseUrl).then(resp=>{
            this.setState({
                user: { user: initialState.user },
                list: resp.data
            })
        })
    }

    clear = e => {
        this.setState({ user: initialState.user })
    }
    
    save = e => {
        const user = this.state.user
        console.log(user)
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                
                this.setState({
                    user: initialState.user,
                    list
                })
            })
    }

    getUpdatedList = (user, add=true) => {
        const list = this.state.list.filter(u => u.id !== user.id)
        if(add) list.unshift(user)
        return list
    }

    updateField = (e) => {
        const user = { ...this.state.user }
        console.log(user)
        user[e.target.name] = e.target.value
        this.setState({
            user
        })
    }


    load = (e,user) => {
        this.setState({
            user
        })
    }

    remove = (e,user) => {
        axios.delete(`${baseUrl}/${user.id}`).then(resp =>{
            const list = this.getUpdatedList(user, false)
            this.setState({
                list
            })
        })
    }



    render(){
        const { user } = this.state

        const label = [{
            title : 'Prenom',
            name:'name',
            value: user.name,
            onChange: e=> this.updateField(e),
            placeholder: 'Prenom'
        },
        {
            title : 'E-mail',
            name:'email',
            value: user.email,
            onChange: e=> this.updateField(e),
            placeholder: 'E-mail'
        }]
        return(
            <Main {...headerProps}>
                <FormUser label={label} save={this.save}  clear={this.clear}/>
                <RenderTable list={this.state.list} load={this.load} remove={this.remove}/>
            </Main>
        )
    }
}