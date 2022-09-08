const getGenre = id => {
  switch (id) {
    case 28:
      return '액션';
      break;
    case 12:
      return '모험';
      break;
    case 16:
      return '애니메이션';
      break;
    case 35:
      return '코미디';
      break;
    case 80:
      return '범죄';
      break;
    case 99:
      return '다큐멘터리';
    case 18:
      return '가족';
      break;
    case 10751:
      return '가족';
      break;
    case 14:
      return '판타지';
      break;
    case 36:
      return '역사';
      break;
    case 27:
      return '공포';
      break;
    case 10402:
      return '음악';
      break;
    case 9648:
      return '미스터리';
      break;
    case 10749:
      return '로맨스';
      break;
    case 878:
      return 'SF';
      break;
    case 10770:
      return 'TV영화';
      break;
    case 53:
      return '스릴러';
      break;
    case 10752:
      return '전쟁';
      break;
    case 37:
      return '서부';
      break;
    default:
      return id;
      break;
  }
};

export default getGenre;
