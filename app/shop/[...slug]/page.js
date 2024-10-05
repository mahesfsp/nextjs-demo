export default function Page({ params }) {
  const hasSlugParams = params.slug && params.slug.length >= 2;

  return (
    <div>
      My post: {hasSlugParams ? `${params.slug[0]}/${params.slug[1]}/${params.slug[2]}` : "No slug provided"}
    </div>
  );
}
