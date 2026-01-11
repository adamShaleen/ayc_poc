"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShoppingBag,
  Filter,
  Shirt,
  Coffee,
  Flag,
  Anchor,
  ChevronRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

// Stubbed product data
const products = [
  {
    id: "burgee",
    name: "AYC Burgee",
    description: 'Official club burgee, 12" x 18". Show your colors!',
    price: 45,
    category: "flags",
    image: "/images/shop/burgee.jpg",
    badge: "Best Seller",
  },
  {
    id: "polo-navy",
    name: "Club Polo - Navy",
    description:
      "Moisture-wicking polo with embroidered AYC logo. Unisex sizing.",
    price: 55,
    category: "apparel",
    image: "/images/shop/polo-navy.jpg",
    sizes: ["S", "M", "L", "XL", "2XL"],
  },
  {
    id: "polo-white",
    name: "Club Polo - White",
    description:
      "Moisture-wicking polo with embroidered AYC logo. Unisex sizing.",
    price: 55,
    category: "apparel",
    image: "/images/shop/polo-white.jpg",
    sizes: ["S", "M", "L", "XL", "2XL"],
  },
  {
    id: "cap",
    name: "Sailing Cap",
    description: "Adjustable cap with embroidered AYC logo. Quick-dry fabric.",
    price: 28,
    category: "apparel",
    image: "/images/shop/cap.jpg",
    badge: "New",
  },
  {
    id: "fleece",
    name: "Quarter-Zip Fleece",
    description:
      "Warm fleece pullover with AYC logo. Perfect for cool mornings on the water.",
    price: 75,
    category: "apparel",
    image: "/images/shop/fleece.jpg",
    sizes: ["S", "M", "L", "XL", "2XL"],
  },
  {
    id: "tshirt",
    name: "Columbia River Tee",
    description:
      "Soft cotton t-shirt featuring Columbia River nautical chart design.",
    price: 32,
    category: "apparel",
    image: "/images/shop/tshirt.jpg",
    sizes: ["S", "M", "L", "XL", "2XL"],
  },
  {
    id: "mug",
    name: "AYC Coffee Mug",
    description: "16oz ceramic mug with club burgee design. Dishwasher safe.",
    price: 18,
    category: "accessories",
    image: "/images/shop/mug.jpg",
  },
  {
    id: "tumbler",
    name: "Insulated Tumbler",
    description:
      "20oz stainless steel tumbler. Keeps drinks cold for 24 hours.",
    price: 35,
    category: "accessories",
    image: "/images/shop/tumbler.jpg",
    badge: "Popular",
  },
  {
    id: "koozie",
    name: "Can Koozie (4-pack)",
    description: "Neoprene can koozies with AYC logo. Set of 4.",
    price: 20,
    category: "accessories",
    image: "/images/shop/koozie.jpg",
  },
  {
    id: "sticker",
    name: "Vinyl Sticker Pack",
    description: "Set of 5 weather-resistant stickers. Various sizes.",
    price: 12,
    category: "accessories",
    image: "/images/shop/stickers.jpg",
  },
  {
    id: "signal-flag",
    name: "Signal Flag Set",
    description: "Complete set of maritime signal flags. Great for learning!",
    price: 85,
    category: "flags",
    image: "/images/shop/signals.jpg",
  },
  {
    id: "tote",
    name: "Canvas Tote Bag",
    description: "Sturdy canvas tote with AYC logo. Great for provisioning.",
    price: 25,
    category: "accessories",
    image: "/images/shop/tote.jpg",
  },
];

const categories = [
  { id: "all", label: "All Products", icon: ShoppingBag },
  { id: "apparel", label: "Apparel", icon: Shirt },
  { id: "accessories", label: "Accessories", icon: Coffee },
  { id: "flags", label: "Flags", icon: Flag },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-navy-800 py-16 text-white">
        <div className="absolute inset-0 bg-[url('/images/waves-pattern.svg')] opacity-5" />
        <Container className="relative">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <ShoppingBag className="h-10 w-10 text-brass-400" />
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Ship&apos;s Store
                </h1>
              </div>
              <p className="max-w-2xl text-lg text-white/80">
                Show your AYC pride with official club merchandise. All proceeds
                support club programs and activities.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">
              <Anchor className="h-6 w-6 text-ocean-400" />
              <div>
                <p className="text-2xl font-bold">{products.length}</p>
                <p className="text-sm text-white/70">Products</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Category Filter */}
      <section className="border-b border-gray-200 bg-white py-4">
        <Container>
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter className="h-5 w-5 flex-shrink-0 text-gray-400" />
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "flex items-center gap-2 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                  selectedCategory === category.id
                    ? "bg-ocean-100 text-ocean-700"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                )}
              >
                <category.icon className="h-4 w-4" />
                {category.label}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <Container>
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Showing {filteredProducts.length} product
              {filteredProducts.length !== 1 && "s"}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>

      {/* Member Discount */}
      <section className="bg-white py-12">
        <Container>
          <div className="rounded-xl border border-ocean-200 bg-ocean-50 p-8">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="mb-2 text-xl font-bold text-navy-800">
                  Member Discount
                </h2>
                <p className="text-gray-600">
                  AYC members receive 10% off all merchandise. Log in to your
                  member account or show your membership card at club events.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 md:justify-end">
                <Button variant="primary" asChild>
                  <Link href="/membership/join">Become a Member</Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:store@astoriayachtclub.org">Contact Store</a>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Ordering Info */}
      <section className="py-12">
        <Container>
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-navy-800">
              How to Order
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Orders can be placed online, at club events, or by contacting the
              Ship&apos;s Store directly.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-ocean-100">
                <span className="text-lg font-bold text-ocean-600">1</span>
              </div>
              <h3 className="mb-2 font-semibold text-navy-800">
                Browse & Select
              </h3>
              <p className="text-sm text-gray-600">
                Choose your items and note sizes if applicable
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-ocean-100">
                <span className="text-lg font-bold text-ocean-600">2</span>
              </div>
              <h3 className="mb-2 font-semibold text-navy-800">Place Order</h3>
              <p className="text-sm text-gray-600">
                Email your order or purchase at club events
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-ocean-100">
                <span className="text-lg font-bold text-ocean-600">3</span>
              </div>
              <h3 className="mb-2 font-semibold text-navy-800">Pick Up</h3>
              <p className="text-sm text-gray-600">
                Collect at the clubhouse or arrange shipping
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Custom Orders */}
      <section className="bg-navy-700 py-12 text-white">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Flag className="mx-auto mb-4 h-10 w-10 text-ocean-400" />
            <h2 className="mb-4 text-2xl font-bold">Custom Orders</h2>
            <p className="mb-6 text-white/80">
              Need custom embroidery for your boat or crew? We can add boat
              names, crew positions, or custom designs to most apparel items.
              Contact the Ship&apos;s Store for pricing and availability.
            </p>
            <Button
              variant="primary"
              className="bg-ocean-500 hover:bg-ocean-600"
              asChild
            >
              <a href="mailto:store@astoriayachtclub.org?subject=Custom Order Inquiry">
                Request Custom Order
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  badge?: string;
  sizes?: string[];
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      {/* Image placeholder */}
      <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="absolute inset-0 flex items-center justify-center">
          <Anchor className="h-16 w-16 text-gray-300" />
        </div>
        {product.badge && (
          <div className="absolute left-3 top-3">
            <span
              className={cn(
                "rounded-full px-2.5 py-1 text-xs font-medium",
                product.badge === "New"
                  ? "bg-green-100 text-green-700"
                  : product.badge === "Best Seller"
                    ? "bg-brass-100 text-brass-700"
                    : "bg-ocean-100 text-ocean-700"
              )}
            >
              {product.badge}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="mb-1 font-semibold text-navy-800 group-hover:text-ocean-600">
          {product.name}
        </h3>
        <p className="mb-3 text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>

        {product.sizes && (
          <div className="mb-3 flex flex-wrap gap-1">
            {product.sizes.map((size) => (
              <span
                key={size}
                className="rounded border border-gray-200 px-2 py-0.5 text-xs text-gray-500"
              >
                {size}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-navy-800">
            ${product.price}
          </span>
          <Button variant="outline" size="sm" asChild>
            <a
              href={`mailto:store@astoriayachtclub.org?subject=Order: ${product.name}`}
            >
              Order
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
