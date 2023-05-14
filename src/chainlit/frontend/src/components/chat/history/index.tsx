import { useAuth } from 'hooks/auth';
import { useRecoilValue } from 'recoil';
import { projectSettingsState } from 'state/project';
import LocalHistoryButton from './local';
import CloudHistoryButton from './cloud';
import { memo } from 'react';
import { CircularProgress } from '@mui/material';

interface Props {
  onClick: (content: string) => void;
}

export default memo(function ChatHistory({ onClick }: Props) {
  const pSettings = useRecoilValue(projectSettingsState);

  if (pSettings?.public === false) {
    return <CloudHistoryButton onClick={onClick} />;
  } else {
    return <LocalHistoryButton onClick={onClick} />;
  }
});