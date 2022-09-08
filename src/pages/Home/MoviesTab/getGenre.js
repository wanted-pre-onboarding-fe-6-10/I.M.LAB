const getGenre = id => {
  switch (id) {
    case 28:
      return '액션';
    case 12:
      return '모험';
    case 16:
      return '애니메이션';
    case 35:
      return '코미디';
    case 80:
      return '범죄';
    case 99:
      return '다큐멘터리';
    case 18:
      return '가족';
    case 10751:
      return '가족';
    case 14:
      return '판타지';
    case 36:
      return '역사';
    case 27:
      return '공포';
    case 10402:
      return '음악';
    case 9648:
      return '미스터리';
    case 10749:
      return '로맨스';
    case 878:
      return 'SF';
    case 10770:
      return 'TV영화';
    case 53:
      return '스릴러';
    case 10752:
      return '전쟁';
    case 37:
      return '서부';
    default:
      break;
  }
};

export default getGenre;
