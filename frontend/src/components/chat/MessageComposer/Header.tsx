import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useChatMessages } from '@chainlit/react-client';
import { IStep } from '@chainlit/react-client';

const hasMessage = (messages: IStep[]): boolean => {
  const validTypes = ['user_message', 'assistant_message'];
  return messages.some(
    (message) =>
      validTypes.includes(message.type) || hasMessage(message.steps || [])
  );
};

export default function InputBoxHeader() {
  const { messages } = useChatMessages();
  const [show, setShow] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    setShow(!hasMessage(messages));
  }, [messages]);

  return (
    <>
      {show ? (
        <div
          href="https://github.com/Chainlit/chainlit"
          target="_blank"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none'
          }}
        >
          <div>{t('components.organisms.chat.inputBox.header.message')}</div>
        </div>
      ) : null}
    </>
  );
}
