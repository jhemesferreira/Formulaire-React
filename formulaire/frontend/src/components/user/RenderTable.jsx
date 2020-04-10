import React from 'react'
import RenderRows from './RenderRows'


export default props =>
    <table className="table mt-4">
        <thead>
            <tr>
                <th>ID</th>
                <th>Prenom</th>
                <th>E-mail</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <RenderRows {...props} />
        </tbody>
    </table>