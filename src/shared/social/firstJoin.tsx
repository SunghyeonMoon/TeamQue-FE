import React, { useState,ChangeEvent,FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import apis from '../apis/api';

import styled from 'styled-components';

import {nicknameSet} from '../../redux/modules/user'

//import nicknCheck from '';

interface Props {
  close: () => void;
}

const FirstJoin: React.FC<Props> = ({close}) => {
  const dispatch = useDispatch();
	const navigator = useNavigate();

  const [nickname, setNickname] = useState("");
	//const [isNickDouble,setNickDouble] = useState(true);
	const [isNick, setIsNick] = useState(false); //글자 수 체크

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
  		console.log( nickname,'nickname check');			
			//중복 체크 setNickDouble(dispatch(nickCheck(nickname))); :boolean
			//글자 수 체크
      if(isNick === true){
				dispatch(nicknameSet(nickname));// nickname 설정 후 db에 사용자 업데이트
				navigator("/");
			}else{
				window.alert("확실히 입력하고 다시 누르소잉");
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

