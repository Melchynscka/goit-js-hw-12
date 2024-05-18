export const renderImages = images => {
  return images
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item zoom-on-hover">
      <a class="gallery-link" href="${largeImageURL}">
        <img
          class="gallery-image"
          src="${webformatURL}"
          alt="${tags}"
        />
      </a>
      <ul class="image-info">
        <li class="info-item">Likes: ${likes}</li>
        <li class="info-item">Views: ${views}</li>
        <li class="info-item">Comments: ${comments}</li>
        <li class="info-item">Downloads: ${downloads}</li>
      </ul>
    </li>`
    )
    .join('');
};
