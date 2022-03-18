import React, { useState,ChangeEvent,FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import {nicknameSet} from '../../redux/modules/user'

interface Props {
  close: () => void;
}

const FirstJoin: React.FC<Props> = ({close}) => {
  const dispatch = useDispatch();
	const navigator = useNavigate();

  const [nickname, setNickname] = useState("");
	const [isNick, setIsNick] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
 		setNickname(e.target.value);
		let userNickRegex = /^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{3,20}$/;
    let NickRegex = userNickRegex.test(e.target.value);

    if (!NickRegex) {
      setIsNick(false);
    } else {
      setIsNick(true);
    }
 	};

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
  		e.preventDefault();  		
      if(isNick === true){
				dispatch(nicknameSet(nickname));
				navigator("/");
			}else{
				window.alert("isNick == false");
			}
  };
  
  return (
    <>
		  <Background>
		  	<Contents>
          <Form onSubmit={onSubmit}>
 		    	  <div>Hello</div>
						 <hr/>
               <Input                      
                 placeholder="3글자 이상의 닉네임을 입력하세요."                   
                 value={nickname} 
                 onChange={onChange}
               />
            </Form>
		  	</Contents>
		  </Background>
    </>
  );
}

export default FirstJoin;

const Background = styled.div`
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.3);
	backdrop-filter: blur(5px);
`;

const Contents = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	/* style */
	padding: 50px;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
`;

const Input = styled.input`
  display: block;
  height= 3vw;
  color= #7A7D81; 
  margin= 0.8vw 0; 
  :checked + span {
    background-color: #d8d8d8;
    font-weight: bold;
    font-size:0.9vw;
  }
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

