import React, { useMemo } from 'react';

import { useChatSession } from '@chainlit/react-client';

import Markdown from '@/components/Markdown';

export default function WelcomeMessage() {
  const { chatProfile } = useChatSession();

  const showWelcomeMessage = useMemo(() => {
    return chatProfile?.search('\u2002') >= 1;
  }, [chatProfile]);

  const welcomeMessage = useMemo(() => {
    return (
      "Je suis Digi, l'assistant rédactionnel d'Infopro Digital. Nous pouvons commencer par une retranscription " +
      'd’un fichier audio ou par un contenu textuel que vous avez déjà préparé et je vous proposerai différentes ' +
      'actions pour vous aider :\n' +
      '\n' +
      "- Retranscription d'un fichier audio ou video\n" +
      '- Nettoyage de transcriptions\n' +
      "- Synthèse, corrections et reformulation d'un texte ou d'une interview\n" +
      "- Suggestions de titre et d'intertitres.\n" +
      '\n' +
      'Pas d’inquiétude, à la fin des étapes nous pourrons continuer à converser si vous avez besoin. Nous pouvons ' +
      'également échanger directement avec la barre de discussion en bas de la page.'
    );
  }, [chatProfile]);

  return showWelcomeMessage ? (
    <div className="px-4 p-5">
      <Markdown>{welcomeMessage}</Markdown>
    </div>
  ) : null;
}
