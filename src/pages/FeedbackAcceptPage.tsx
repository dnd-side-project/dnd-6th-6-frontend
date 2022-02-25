import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { getDetailFeedbackAPI } from '../apis/feedback';
import { getLoginUser } from '../apis/user';
import FeedbackAccept from '../components/templates/FeedbackAccept/FeedbackAccept';
import { feedback1 } from '../dummyData/dummyFeedback';
import { Feedback } from '../interfaces/feedback';
import { User } from '../interfaces/user';

type ParamTypes = {
  feedbackId: string;
  choreId: string;
};

const feedback = feedback1;

const FeedbackAcceptPage = () => {
  const { feedbackId, choreId } = useParams() as ParamTypes;
  console.log(feedbackId, choreId);
  const [token, setToken] = useState('');
  // 로그인한 user 정보
  const { isLoading, data: me } = useQuery<User>('me', getLoginUser, {
    enabled: !!token,
  });
  const { data: feedback } = useQuery<Feedback>(
    ['feedback', feedbackId],
    () => getDetailFeedbackAPI(+choreId as number, +feedbackId as number),
    {
      enabled: !!me,
    },
  );

  useEffect(() => {
    setToken(localStorage.getItem('token') || '');
    //token없을경우 login page로 redirect
  }, [token]);

  if (!me || !feedback) {
    return <div>로딩중...</div>;
  }
  return <FeedbackAccept feedback={feedback} />;
};

export default FeedbackAcceptPage;
