import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';
import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories, Error } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repos, setRepos] = useState<Repository[]>(() => {
    const storageRepos = localStorage.getItem('@GithubExplorer:repositories');

    if (storageRepos) {
      return JSON.parse(storageRepos); // "voltando a conversão"
    }
    return [];
  });
  const [inputError, setInputError] = useState('');

  useEffect(() => {
    localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repos)); //aqui estamos convertendo o array para json para ficar salvo no localstorage
  }, [repos]);

  async function handleAddRepo(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    if (!newRepo) {
      setInputError('Digite o autior/nome do repositório');
      return;
    }

    try {
      const response = await api.get(`repos/${newRepo}`);

      const repository = response.data;

      setRepos([...repos, repository]);

      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por esse repositório');
    }
  }
  return (
    <>
      <img src={logoImg} alt="Github Explores" />
      <Title>Explore repositórios no Github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepo}>
        <input
          placeholder="Digite o nome do repositório"
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
        />
        <button type="submit" onClick={() => {}}>
          Pesquisar
        </button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repos.map(repo => (
          <a key={repo.full_name} href="kjb">
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />
            <div>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
