import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi'

import api from '../../services/api'
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('')
    const [repositories, setRepositories] = useState([]);

    function handleAddReposotory() {
        //add repo

    }

    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no GitHub</Title>

            <Form action="">
                <input
                    placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img src="https://avatars3.githubusercontent.com/u/22222919?s=460&u=3d27e0999cd4ec472aa121b78d79145f3e711cef&v=4"
                        alt="Matheus Guerra">
                    </img>
                    <div>
                        <strong>matheussguerra/node</strong>
                        <p>Aprendendo a usar node</p>
                    </div>
                    <FiChevronRight size={20} />


                </a>
            </Repositories>
        </>
    );

}
export default Dashboard;
