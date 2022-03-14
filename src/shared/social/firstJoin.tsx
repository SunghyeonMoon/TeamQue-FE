import React, { useState,ChangeEvent,FormEvent } from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';

//import nicknCheck from '';

interface Props {
  close: () => void;
}

const FirstJoin: React.FC<Props> = ({close}) => {
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
 		const { value } = e.target;
 		setNickname(value);
 	};

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
  		e.preventDefault();
  		console.log('nickname check', nickname);
      //dispatch(nicknCheck(nickname)); nickname 설정 후 db에 사용자 업데이트
  };
  
  return (
    <>
		  <Background>
		  	<Contents>
          <Form onSubmit={onSubmit}>
 		    	  <div>Hello</div>
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
