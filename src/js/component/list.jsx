import React from 'react';

const List = ({ palabras }) => {
    const contador_lineas=palabras.length;
    return (
        <div className="container mt-1">
            
            <ul className="list-group mx-auto mt-0" style={{ maxWidth: '600px' }}>
            {palabras.map((palabra, index) => (
                    <li key={index} className="w-100 d-flex justify-content-between align-items-center border list-group-item">
                        {palabra}
                        <button className="btn btn-outline-danger btn-sm float-end">
                            <i className="fa fa-trash"></i>
                            </button>
                            </li>

            ))}
                <li className="list-group-item text-muted small text-start">{contador_lineas} item left</li>
            </ul>
        </div>
    );
};

export default List;