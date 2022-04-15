import ProductCard from '../product-card/product-card.component';

import { 
  StyleCategoryPreviewContainer, 
  StyleLinkTitle, 
  StylePreview, 
} from './category-preview.styles';

const CategoryPreview = ({ title, products }) => {
  return (
    <StyleCategoryPreviewContainer>
      <h2>
        <StyleLinkTitle to={title}>
          {title.toUpperCase()}
        </StyleLinkTitle>
      </h2>
      <StylePreview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </StylePreview>
    </StyleCategoryPreviewContainer>
  );
};

export default CategoryPreview;