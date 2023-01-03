import { useState, useEffect } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(() => {
        console.log("랜더링이 완료 되었습니다.");
        console.log({
            name,
            nickname
        },[]);
    });

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    const [visible, setVisible] = useState(false);
    return(
        <div>
            <div>
                <input value = {name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b>이름</b> { name }
                </div>
                <div>
                    <b>닉네임</b> { nickname }
                </div>
            </div>
            <div>
                <button onClick={() => {
                    setVisible(!visible);
                }}>
                    {visible ? '숨기기' : '보이기'}
                </button>
            </div>

        </div>

    )
}

export default Info