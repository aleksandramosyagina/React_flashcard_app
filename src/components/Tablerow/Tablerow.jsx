import React, { useState } from 'react';


function TableRow({ row }) {
    const [isEditMode, setIsEditMode] = useState(false);
    const [editedField, setEditedField] = useState('');

    const handleEdit = () => {
        setIsEditMode(!isEditMode);
    }

    const handleCancel = () => {
        setIsEditMode(!isEditMode);
    }

    const handleChangeField = (event) => {
        setEditedField(event.target.value);
        console.log(event.target.value);
    }


    return (
        <>
            <td>
                {isEditMode ? <input type="text" defaultValue={editedField ? editedField.english : row.english} onChange={handleChangeField}></input> : row.english}
            </td>

            <td>
                {isEditMode ? <input type="text" defaultValue={row.transcription}></input> : row.transcription}
            </td>
            <td>
                {isEditMode ? <input type="text" defaultValue={row.russian}></input> : row.russian}
            </td>
            <td>
                {isEditMode ?
                    <>
                        <button>Сохранить</button>
                        <button onClick={handleCancel}>Отмена</button>
                    </> :
                    <> <button className='edit-btn' onClick={handleEdit}>Редактировать
                        {/* <img src='assets/img/edit.png' alt='edit icon'></img> */}
                    </button>
                        <button>Удалить</button>
                    </>
                }
            </td>
        </>
    )
}

export default TableRow