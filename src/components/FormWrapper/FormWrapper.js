import React from 'react';
import styles from './FormWrapper.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';

const FormWrapper = ({submitFunc}) => (
    <div className={styles.wrapper}>
        <Title>Add new favourite person</Title>
        <form autoComplete="off" className={styles.form} onSubmit={submitFunc}>
            <Input
                name="name"
                label="Name"
                maxLength={30}
            />
            <Input
                name="link"
                label="Twitter link"
                maxLength={30}
            />
            <Input
                name="image"
                label="Image"
                maxLength={30}
            />
            <Input
                tag="textarea"
                name="description"
                label="Description"
                maxLength={30}
            />
            <Button>add new item</Button>
        </form>
    </div>
);

export default FormWrapper;