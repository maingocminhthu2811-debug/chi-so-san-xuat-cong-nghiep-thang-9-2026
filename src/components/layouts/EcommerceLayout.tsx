import React, { useState } from 'react';
import {
  ArrowRight,
  Check,
  ChevronRight,
  Filter,
  Heart,
  Minus,
  Plus,
  Search,
  ShoppingBag,
  SlidersHorizontal,
  X,
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: 'audio' | 'desk' | 'time' | 'lighting';
  price: number;
  edition: string;
  material: string;
  imageColor: string;
  description: string;
}

export const EcommerceLayout: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'audio' | 'desk' | 'time' | 'lighting'>('all');
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([
    {
      product: {
        id: 'obj-101',
        name: 'Monolithic Transistor Radio',
        category: 'audio',
        price: 340,
        edition: 'Batch 04',
        material: 'Anodized 6061 Aluminum',
        imageColor: 'bg-zinc-100',
        description: 'Discrete FM/AM synthesizer with milled brass dial and high-density acoustic baffle.',
      },
      quantity: 1,
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const products: Product[] = [
    {
      id: 'obj-101',
      name: 'Monolithic Transistor Radio',
      category: 'audio',
      price: 340,
      edition: 'Batch 04 · In Stock',
      material: 'Anodized 6061 Aluminum',
      imageColor: 'bg-zinc-100',
      description: 'Discrete FM/AM synthesizer with milled brass dial and high-density acoustic baffle.',
    },
    {
      id: 'obj-102',
      name: 'Linear Desk Clock No. 2',
      category: 'time',
      price: 210,
      edition: 'Edition of 500',
      material: 'Frosted Silica Glass & Cast Iron',
      imageColor: 'bg-zinc-100',
      description: 'Silent sweep quartz mechanism encased in monolithic glass prism.',
    },
    {
      id: 'obj-103',
      name: 'Diffused Task Luminaire',
      category: 'lighting',
      price: 460,
      edition: 'Hand-finished in Kyoto',
      material: 'Spun Titanium & Rice Paper',
      imageColor: 'bg-zinc-100',
      description: 'Balanced counterweight articulation with 2700K warm OLED array.',
    },
    {
      id: 'obj-104',
      name: 'Precision Mechanical Calculator',
      category: 'desk',
      price: 185,
      edition: 'Restocked',
      material: 'PBT Keycaps & Solid Walnut',
      imageColor: 'bg-zinc-100',
      description: 'Tactile blue switches with high-contrast monochrome LCD screen.',
    },
    {
      id: 'obj-105',
      name: 'Acoustic Resonator Pod',
      category: 'audio',
      price: 520,
      edition: 'Numbered series',
      material: 'Cast Beryllium & Raw Linen',
      imageColor: 'bg-zinc-100',
      description: 'Omnidirectional planar magnetic driver delivering ultra-flat response.',
    },
    {
      id: 'obj-106',
      name: 'Solid Brass Caliper Gauge',
      category: 'desk',
      price: 140,
      edition: 'Archival tooling',
      material: 'Engraved Heavy Brass',
      imageColor: 'bg-zinc-100',
      description: 'Vernier scale calibrated to 0.02mm accuracy with vernier thumb-lock.',
    },
  ];

  const filteredProducts = products.filter(
    (p) => activeCategory === 'all' || p.category === activeCategory
  );

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as { product: Product; quantity: number }[]
    );
  };

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="w-full bg-white text-zinc-900 font-sans min-h-[900px] select-none relative">
      {/* 1. Atelier Top Navigation */}
      <header className="border-b border-zinc-200/80 px-8 py-4 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-20">
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold tracking-widest uppercase text-zinc-900">
            Atelier No. 08
          </span>
          <span className="text-zinc-300">/</span>
          <span className="text-xs text-zinc-500 font-mono">Catalog 2026</span>
        </div>

        {/* Categories as clean typography */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-600">
          {(['all', 'audio', 'desk', 'time', 'lighting'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`capitalize transition-colors ${
                activeCategory === cat
                  ? 'text-zinc-900 font-bold border-b-2 border-zinc-900 pb-0.5'
                  : 'hover:text-zinc-900'
              }`}
            >
              {cat === 'all' ? 'All Objects' : cat}
            </button>
          ))}
        </nav>

        {/* Bag Trigger */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 text-xs font-medium text-zinc-900 hover:text-zinc-600 transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Bag</span>
            <span className="font-mono bg-zinc-100 text-zinc-800 px-1.5 py-0.5 rounded text-[10px]">
              {cart.reduce((total, item) => total + item.quantity, 0)}
            </span>
          </button>
        </div>
      </header>

      {/* 2. Hero Monograph Intro */}
      <section className="max-w-6xl mx-auto px-8 pt-12 pb-8 border-b border-zinc-100">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-2">
              Industrial Design Studio
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900">
              Objects for deliberate living.
            </h1>
            <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
              Every instrument in our edition is milled from solid alloys, assembled by hand, and engineered without planned obsolescence.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 text-xs font-medium text-zinc-700 hover:bg-zinc-50 transition-colors">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Sort: Featured</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. Product Gallery Grid */}
      <section className="max-w-6xl mx-auto px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col justify-between border border-zinc-200/80 rounded-2xl p-5 hover:border-zinc-300 transition-all duration-300 bg-white"
            >
              <div>
                {/* Simulated Object Frame */}
                <div className="w-full aspect-square bg-zinc-50 rounded-xl mb-4 p-6 flex flex-col justify-between border border-zinc-100 relative overflow-hidden group-hover:bg-zinc-100/60 transition-colors">
                  <div className="flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                    <span>{product.id}</span>
                    <span>{product.edition}</span>
                  </div>

                  {/* Minimalist Vector Silhouette */}
                  <div className="w-28 h-28 mx-auto rounded-full border-2 border-dashed border-zinc-300 flex items-center justify-center text-zinc-400 text-xs font-mono">
                    [Object Mock]
                  </div>

                  <div className="text-[11px] text-zinc-500 font-mono truncate">
                    {product.material}
                  </div>
                </div>

                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h3 className="text-sm font-bold text-zinc-900 group-hover:text-zinc-600 transition-colors">
                    {product.name}
                  </h3>
                  <span className="font-mono text-xs font-bold text-zinc-900 tabular-nums">
                    ${product.price}
                  </span>
                </div>

                <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2 mb-4">
                  {product.description}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-400">Standard Delivery Free</span>
                <button
                  onClick={() => addToCart(product)}
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium transition-colors flex items-center gap-1.5 shadow-2xs"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add to Bag</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Sliding Shopping Bag Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-xs transition-opacity"
          ></div>

          {/* Drawer Canvas */}
          <div className="relative w-full max-w-md bg-white border-l border-zinc-200 h-full p-6 flex flex-col justify-between shadow-2xl z-10 animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-zinc-200">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-zinc-900" />
                  <span className="text-sm font-bold text-zinc-900">Your Bag</span>
                  <span className="text-xs font-mono text-zinc-500">
                    ({cart.reduce((t, i) => t + i.quantity, 0)} items)
                  </span>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1 rounded-lg text-zinc-400 hover:text-zinc-800 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Items List */}
              <div className="divide-y divide-zinc-100 my-4 max-h-[60vh] overflow-y-auto space-y-3">
                {cart.length === 0 ? (
                  <div className="text-center py-12 text-zinc-400 text-xs">
                    Your bag is currently empty.
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.product.id} className="pt-3 flex items-start gap-3">
                      <div className="w-14 h-14 bg-zinc-100 rounded-lg flex items-center justify-center text-[10px] font-mono text-zinc-400 shrink-0">
                        IMG
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-bold text-zinc-900">
                          {item.product.name}
                        </div>
                        <div className="text-[11px] text-zinc-500 font-mono">
                          ${item.product.price} each
                        </div>

                        {/* Quantity Stepper */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, -1)}
                            className="p-1 rounded border border-zinc-200 hover:bg-zinc-50 text-zinc-600"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-mono font-medium px-1">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, 1)}
                            className="p-1 rounded border border-zinc-200 hover:bg-zinc-50 text-zinc-600"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      <div className="font-mono text-xs font-bold text-zinc-900">
                        ${item.product.price * item.quantity}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Checkout Area */}
            <div className="pt-4 border-t border-zinc-200 space-y-3">
              <div className="flex items-center justify-between text-xs text-zinc-600">
                <span>Estimated Shipping</span>
                <span className="font-mono text-emerald-600">Complimentary</span>
              </div>
              <div className="flex items-center justify-between text-sm font-bold text-zinc-900">
                <span>Subtotal</span>
                <span className="font-mono">${cartTotal}</span>
              </div>
              <button
                onClick={() => alert(`Simulated checkout for $${cartTotal}. Payment gateway initialized.`)}
                className="w-full py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-xs shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
