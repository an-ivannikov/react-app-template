export default function getExternalLinkProps(): { target: string; rel: string } {
  return ({
    target: '_blank',
    rel: 'noreferrer noopener',
  });
};
