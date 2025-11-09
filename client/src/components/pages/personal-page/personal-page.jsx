import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { Title } from "../../../elements/title/title";
import {
  fetchGetUserServices,
  fetchRemoveUserService,
} from "../../../request/thunk-action";

export const PersonalPage = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetUserServices(user.id));
  }, [dispatch, user.id]);

  const onDeleteService = (userId, serviceId) => {
    try {
      dispatch(fetchRemoveUserService(userId, serviceId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Title
        label={`${user.name} добро пожаловать на борт!`}
        fontSize={"30px"}
      />
      <table>
        <thead>
          <tr>
            <th>Лого</th>
            <th>Название</th>
            <th>Возраст</th>
            <th>Стоимость</th>
            <th>Дата занятия</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          {user.services.map((service) => (
            <tr key={service._id}>
              {/* Лого - пропущено, вставьте изображение по желанию */}
              <td>
                {/* Можете добавить изображение, например */}
                {/* <img src={service.logoUrl} alt="Логотип" width="50" /> */}
              </td>
              <td>{service.title}</td>
              <td>{service.subtitle}</td>
              <td></td>
              {/* <td>
                {service.prices.map((p, index) => (
                  <div key={index}>
                    {p.title}: {p.price}
                  </div>
                ))}
              </td> */}
              <td>Дата</td>
              <td>
                <button onClick={() => onDeleteService(user.id, service._id)}>
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
