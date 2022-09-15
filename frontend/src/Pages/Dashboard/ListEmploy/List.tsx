import React, { useEffect, useRef, useState } from 'react';
import { Employee } from '../../../Provider/data/type';
import httpClient from '../../../Provider/utils/http-client';
import './list.css';
import { usePagination } from '../../../Components/Common/SimplePagination/Utils';
import { SimplePagination } from '../../../Components/Common/SimplePagination/SimplePagination';

const List = () => {
    const [filter, setFilter] = useState<String>('');

    const [employee, setEmployee] = useState<{
        lastPage: number;
        currentPage: number;
        data: Employee[];
    }>({
        data: [],
        lastPage: 2,
        currentPage: 1,
    });
    const { page, setPage } = usePagination(employee.currentPage, employee.lastPage);
    useEffect(() => {
        update(page.currentPage);
    });

    const editing = (id: number | undefined) => {
        httpClient.delete('/employee/delete/' + id);
    };

    const update = (thePage: number) => {
        if (filter == 'femme') {
            httpClient.get('/employee/filter/femme').then((res) => {
                setEmployee({
                    data: res.data.data,
                    lastPage: res.data.lastPage,
                    currentPage: res.data.currentPage,
                });
            });
        } else if (filter == 'homme') {
            httpClient.get('/employee/filter/homme').then((res) => {
                setEmployee({
                    data: res.data.data,
                    lastPage: res.data.lastPage,
                    currentPage: res.data.currentPage,
                });
            });
        } else {
            httpClient.get('employee').then((res) => {
                setEmployee({
                    data: res.data.data,
                    lastPage: res.data.lastPage,
                    currentPage: res.data.currentPage,
                });
            });
        }
    };

    const newPage = (page: number) => {
        setPage(page);
        update(page);
    };

    return (
        <div className='w-100 container text-dark h-100 p-3'>
            <div className='w-100'>
                <div className='d-flex w-50 justify-content-start'>
                    <div className=''>
                        <p>Vous pouvez filtrer par sexe :</p>
                    </div>
                    <div className='mx-2 '>
                        <select className='form-select' onChange={(e) => setFilter(e.target.value)}>
                            <option value='homme'>Hommes</option>
                            <option value='femme'>Femmes</option>
                        </select>
                    </div>
                    <button className='btn btn-warning mx-4 text-light' onClick={() => setFilter('')}>
                        Annuler la filtre
                    </button>
                </div>
            </div>
            <div className='w-100 mt-1'>
                <table className='table'>
                    <thead className='table-dark text-light bg-dark'>
                        <tr>
                            <th>Matricule</th>
                            <th>Nom</th>
                            <th>Genre</th>
                            <th>Date de naissance</th>
                            <th>Role</th>
                            <th>Departement</th>
                            <th>Mail</th>
                            <th className='w-25'>Option</th>
                        </tr>
                    </thead>
                    <tbody className='text-dark'>
                        {employee.data.length !== 0 &&
                            employee.data.map((e) => (
                                <tr key={e.id}>
                                    <td>{e.ref}</td>
                                    <td>{e.name}</td>
                                    <td>{e.sex}</td>
                                    <td>{e.birthDate}</td>
                                    <td>{e.position}</td>
                                    <td>{e.domain}</td>
                                    <td>{e.email}</td>
                                    <td>
                                        <div>
                                            <button className="btn btn-warning text-light" onClick={() => editing(e.id)}>Supprimer</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                <div className='w-100'>
                    <SimplePagination
                        currentPage={page.currentPage}
                        lastPage={page.lastPage}
                        changePage={newPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default List;
