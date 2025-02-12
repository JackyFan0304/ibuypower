import { useRouter } from 'next/router';

export default function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  return <div>產品詳情頁: {id}</div>;
}
