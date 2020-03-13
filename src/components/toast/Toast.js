import React, { useState, useEffect } from 'react';
import './Toast.css'

const Toast = (props) => {
    let { toastList, position, autoClose } = props;
    let [list, setList] = useState(toastList);

    useEffect(() => {
        setList(toastList);
        const timer = setTimeout((time) => {
            deleteToast();
        }, autoClose)
        return () => clearTimeout(timer);
    }, [toastList, autoClose, list]);

    const deleteToast = id => {
        const index = list.findIndex(ele => ele.id === id);
        list.splice(index, 1);
        setList([...list]);
    }

    return (
        <div className={`notification-container ${position}`}>
            {
                list.map((toast, i) =>
                    <div
                        key={i}
                        className={`notification toast ${position}`} 
                        style={{ backgroundColor: toast.backgroundColor }}
                    >
                     
                       
                        <button onClick={() => deleteToast(toast.id)}>
                            X
                        </button>
                            <div className="notification-image">
                                <img src={toast.icon} alt={toast.title} />
                            </div>
                            <div>
                                <p className="notification-title">{toast.title}</p>
                                <p className="notification-message">{toast.description}</p>
                            </div>
                          
                        <div className="filler" />
                    </div>
                )
            }
        </div>
    )
}
Toast.defaultProps = {
    position: "bottom-right",
    autoClose: 3000
}
export default Toast;