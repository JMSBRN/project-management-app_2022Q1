import React from 'react';
import * as Styled from './BoardForm.style';
import { useTranslation } from 'react-i18next';

export const BoardForm = () => {
  const { t } = useTranslation();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const handleBoardSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Styled.Form onSubmit={handleBoardSubmit}>
        <Styled.Title>{t('BoardForm.title')}</Styled.Title>
        <label>{t('BoardForm.name')}:</label>
        <Styled.Form_input
          type="text"
          value=""
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          placeholder={t('BoardForm.namePlaceholder')}
          required
        />
        <label>{t('BoardForm.description')}:</label>
        <Styled.Form_input
          type="text"
          value=""
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          placeholder={t('BoardForm.descriptionPlaceholder')}
          required
        />
        <Styled.Form_input_submit type="submit" value={t('BoardForm.btn')} />
      </Styled.Form>
    </>
  );
};
