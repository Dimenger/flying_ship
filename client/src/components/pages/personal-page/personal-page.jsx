import { useSelector } from "react-redux";

export const PersonalPage = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col">Фамилия</th>
            <th scope="col">Имя</th>
            <th scope="col">Дата регистрации</th>
            <th scope="col">Телефон</th>
            <th scope="col">email</th>
            <th scope="col">Роль</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> {user.surname}</td>
            <td> {user.name}</td>
            <td>{user.registered_at}</td>
            <td> {user.phone}</td>
            <td> {user.email}</td>
            <td> {user.role}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
