import React, { useEffect, useState } from 'react'

import { set, ref, onValue, remove, update } from "firebase/database";
import { db } from './firebase';
import { uid } from 'uid';

import IconPen from './assets/iconPen.svg'
import IconTrash from './assets/iconTrash.svg'

import {
  Container,
  Cards,
  Card,
  ButtonsGroup,
  InputGroup,
  Input
} from './Cards/styles';

function App() {
  const [todo, setTodo] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [tempUuid, setTempUuid] = useState("");

  const [flip, setFlip] = useState(-1);
  const [color, setColor] = useState(false);
  const [randomList, setRandomList] = useState(false);
  const [newListRandom, setNewListRandom] = useState([]);
  const [show, setShow] = useState('');

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  //read
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((todo) => {
          setTodos((oldArray) => [...oldArray, todo]);
        });
      }
    });
  }, []);

  //write
  const writeToDatabase = () => {
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      todo,
      description,
      uuid,
    });

    setTodo("");
    setDescription("");
  };

  //update
  const handleUpdate = (todo) => {
    setIsEdit(true);
    setTempUuid(todo.uuid);
    setTodo(todo.todo);
    setDescription(todo.description);
  };

  const handleSubmitChange = () => {
    update(ref(db, `/${tempUuid}`), {
      todo,
      uuid: tempUuid,
      description,
    });

    setTodo("");
    setDescription("");
    setIsEdit(false);
  };

  //delete
  const handleDelete = (todo) => {
    remove(ref(db, `/${todo.uuid}`));
  };

  const handleClick = (i) => {
    setColor(!color)
    setFlip(i)
  }

  const handleRandonItems = () => {
    const shuffle = todos => [...todos].sort(() => Math.random() - 0.5);
    const newList = shuffle(todos);
    setRandomList(true)
    console.log(newList);
    setNewListRandom(newList)
  }

  useEffect(() => {

  }, [show])

  const handleShow = event => {
    setShow(event.target.value)
  }

  return (
    <Container>
      {show === process.env.REACT_APP_SECRET ? (
        <>
          <InputGroup>
            <input
              type="text"
              value={todo}
              onChange={handleTodoChange}
              placeholder="Pergunta"
            />
            <textarea
              rows="4"
              cols="50"
              type="text"
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Resposta"
            />
            {isEdit ? (
              <div className='buttons-form'>
                <button onClick={handleSubmitChange}>Atualizar Mudança</button>
                <button
                  onClick={() => {
                    setIsEdit(false);
                    setTodo("");
                    setDescription("");
                  }}
                >
                  cancelar
                </button>
              </div>
            ) : (
              <button onClick={writeToDatabase}>Enviar</button>
            )}
          </InputGroup>

          <button className='random-btn' onClick={() => handleRandonItems()}>Reordenar</button>

          <Cards className='cards'>
            {randomList ?
              newListRandom.map((item, i) => (
                <Card
                  key={item.uuid}
                  onClick={() => handleClick(i)}
                  className={flip == i && !color ? 'blackBk' : 'greyBk'}
                >
                  <div>
                    <div className={flip == i && !color ? 'none' : 'title'}>{item.todo}</div>
                    <div className={flip == i && !color ? 'description' : 'none'}>{item.description}</div>
                    <ButtonsGroup>
                      <div onClick={() => handleUpdate(item)}>
                        <img src={IconPen} alt={'icon'} />
                      </div>
                      <div onClick={() => handleDelete(item)}>
                        <img src={IconTrash} alt={'icon'} />
                      </div>
                    </ButtonsGroup>
                  </div>
                </Card>
              ))
              :
              todos.map((item, i) => (
                <Card
                  key={item.uuid}
                  onClick={() => handleClick(i)}
                  className={flip == i && !color ? 'blackBk' : 'greyBk'}
                >
                  <div>
                    <div className={flip == i && !color ? 'none' : 'title'}>{item.todo}</div>
                    <div className={flip == i && !color ? 'description' : 'none'}>{item.description}</div>
                    <ButtonsGroup>
                      <div onClick={() => handleUpdate(item)}>
                        <img src={IconPen} alt={'icon'} />
                      </div>
                      <div onClick={() => handleDelete(item)}>
                        <img src={IconTrash} alt={'icon'} />
                      </div>
                    </ButtonsGroup>
                  </div>
                </Card>
              ))}
          </Cards>
        </>
      ) : (
        <Input
          type="text"
          value={show}
          onChange={handleShow}
        />
      )
      }
    </Container>
  );
}
export default App;
