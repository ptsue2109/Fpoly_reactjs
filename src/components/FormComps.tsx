import { Divider } from 'primereact/divider';
import React, { useEffect, useState } from 'react';


export const passwordHeader = <h6>Pick a password</h6>;
export const passwordFooter = (
    <React.Fragment>
        <Divider />
        <p className="mt-2">Suggestions</p>
        <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: '1.5' }}>
            <li>At least one lowercase</li>
            <li>At least one uppercase</li>
            <li>At least one numeric</li>
            <li>Minimum 8 characters</li>
        </ul>
    </React.Fragment>
);