import { readFileSync } from "fs";
import { join } from "path";
import { Product } from "@/types/product";

function parseCsvLine(line: string): string[] {
  const out: string[] = [];
  let cur = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      inQuotes = !inQuotes;
    } else if (c === "," && !inQuotes) {
      out.push(cur.trim());
      cur = "";
    } else {
      cur += c;
    }
  }
  out.push(cur.trim());
  return out;
}

export function getProductsFromCsv(csvText: string): Product[] {
  const lines = csvText.trim().split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) return [];
  const header = parseCsvLine(lines[0]);
  const products: Product[] = [];
  for (let i = 1; i < lines.length; i++) {
    const row = parseCsvLine(lines[i]);
    const obj: Record<string, string> = {};
    header.forEach((h, j) => { obj[h] = row[j] ?? ""; });
    products.push({
      id: parseInt(obj.id || "0", 10),
      slug: obj.slug || "",
      title: obj.title || "",
      description: obj.description || "",
      imagePath: obj.imagePath || "",
    });
  }
  return products;
}

const DEFAULT_PRODUCTS: Product[] = [
  { id: 1, slug: "dinh-vi-xe-may", title: "Định vị xe máy", description: "Thiết bị định vị và chống trộm xe máy, theo dõi vị trí và hành trình. Lắp đặt tận nơi tại Huế.", imagePath: "/images/products/dinh-vi-xe-may.jpg" },
  { id: 2, slug: "dinh-vi-o-to", title: "Định vị ô tô", description: "Giải pháp định vị ô tô, giám sát hành trình và chống trộm. Lắp đặt tận nơi tại Huế.", imagePath: "/images/products/dinh-vi-o-to.jpg" },
  { id: 3, slug: "camera-hanh-trinh", title: "Camera hành trình", description: "Camera hành trình ghi hình khi lái xe, lưu bằng chứng tai nạn. Lắp đặt tận nơi tại Huế.", imagePath: "/images/products/camera-hanh-trinh.jpg" },
  { id: 4, slug: "camera-giam-sat", title: "Camera giám sát", description: "Camera an ninh cho nhà ở, cửa hàng, văn phòng. Xem từ xa. Lắp đặt tận nơi tại Huế.", imagePath: "/images/products/camera-giam-sat.jpg" },
];

export function getProducts(): Product[] {
  try {
    const path = join(process.cwd(), "public", "data", "products.csv");
    const csvText = readFileSync(path, "utf-8");
    const list = getProductsFromCsv(csvText);
    return list.length > 0 ? list : DEFAULT_PRODUCTS;
  } catch {
    return DEFAULT_PRODUCTS;
  }
}
