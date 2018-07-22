export const ACTION_UNKNOWN = {
  type: 'UNKNOWN',
};

export const newsArticleeMock = {
  "id": 1,
  "title": "Twitter acquires anti-abuse technology provider Smyte",
  "description": "Twitter this morning announced it has agreed to buy San Francisco-based technology company Smyte, which describes itself as “trust and safety as a service.” Founded in 2014 by former Google and Instagram engineers, Smyte offers tools to stop online abuse, harassment, and spam, and protect user accounts. Terms of the deal were not disclosed, but thi",
  "authors": [
      "Sarah Perez"
  ],
  "slug": "twitter-acquires-anti-abuse-technology-provider-smyte-3154506676",
  "url": "https://techcrunch.com/2018/06/21/twitter-acquires-anti-abuse-technology-provider-smyte/",
  "mobile_url": null,
  "image_url": "https://techcrunch.com/wp-content/uploads/2017/01/twitter-ban-speech.png",
  "published_at": "2018-06-21T03:02:32.000Z",
  "site": {
      "id": "L5KGX5LEAb",
      "name": "TechCrunch",
      "slug": null,
      "language": "en",
      "hostname": "techcrunch.com",
      "url": "https://techcrunch.com",
      "mobile_url": null
  },
  "language": "en",
  "word_count": 801,
  "read_time": 180,
  "created": "2018-06-21T13:20:35.026Z",
  "score": 58.955154,
};
export const newsArticleeMock2 = {
  "id": 2,
  "title": "Twitter acquires anti-abuse technology provider Smyte",
  "description": "Twitter this morning announced it has agreed to buy San Francisco-based technology company Smyte, which describes itself as “trust and safety as a service.” Founded in 2014 by former Google and Instagram engineers, Smyte offers tools to stop online abuse, harassment, and spam, and protect user accounts. Terms of the deal were not disclosed, but thi",
  "authors": [
      "Sarah Perez"
  ],
  "slug": "twitter-acquires-anti-abuse-technology-provider-smyte-3154506676",
  "url": "https://techcrunch.com/2018/06/21/twitter-acquires-anti-abuse-technology-provider-smyte/",
  "mobile_url": null,
  "image_url": "https://techcrunch.com/wp-content/uploads/2017/01/twitter-ban-speech.png",
  "published_at": "2018-06-21T03:02:32.000Z",
  "site": {
      "id": "L5KGX5LEAb",
      "name": "TechCrunch",
      "slug": null,
      "language": "en",
      "hostname": "techcrunch.com",
      "url": "https://techcrunch.com",
      "mobile_url": null
  },
  "language": "en",
  "word_count": 801,
  "read_time": 180,
  "created": "2018-06-21T13:20:35.026Z",
  "score": 58.955154,
};

export const newsMock = [
  newsArticleeMock,
  newsArticleeMock2,
];

export const responseNewsMock = {
  data: {
    data: newsMock,
  },
};


export const getNewsMock = {
  url: 'https://publist.ai/api/v2/jobs.frontend',
  method: 'POST',
  payload: {
    'query': 'tech',
  }
}
