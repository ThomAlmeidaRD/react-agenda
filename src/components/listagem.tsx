import data from '../dados/data.json';

interface Person {
    id: number;
    img: string;
    name: string;
    email: string;
    cpf: string;
    date_born: string;
    number: string;
}

const listagem = () => {
    return (
        <div className='contact-list'>
            <table>
                <tr className='title-row'>
                    <th>ID</th>
                    <th>Perfil</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>CPF</th>
                    <th>D. Nascimento</th>
                    <th>Telefone</th>
                </tr>

                {data.map((person: Person, index: number) => (
                    <tr key={index}>
                        <td>#{person.id}</td>
                        <td><img src={person.img} alt="" /></td>
                        <td>{person.name}</td>
                        <td>{person.email}</td>
                        <td>{person.cpf}</td>
                        <td>{person.date_born}</td>
                        <td>{person.number}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default listagem;
