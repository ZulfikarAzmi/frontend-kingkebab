import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // state form
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image_url: "",
  });
  const [editing, setEditing] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // fetch data produk
  const fetchProducts = () => {
    axios
      .get("http://localhost:8080/api/admin/products", { withCredentials: true })
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response?.data?.error || "Gagal ambil data");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // tambah produk
  const handleAddProduct = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8080/api/admin/products",
        {
          name: newProduct.name,
          description: newProduct.description,
          price: Number(newProduct.price),
          stock: Number(newProduct.stock),
          image_url: newProduct.image_url,
        },
        { withCredentials: true }
      )
      .then(() => {
        setNewProduct({
          name: "",
          description: "",
          price: "",
          stock: "",
          image_url: "",
        });
        setShowModal(false);
        fetchProducts();
      })
      .catch((err) => {
        alert(err.response?.data?.error || "Gagal tambah produk");
      });
  };

  // edit produk
  const handleEditProduct = (id, updatedProduct) => {
    axios
      .put(`http://localhost:8080/api/admin/products/${id}`, updatedProduct, {
        withCredentials: true,
      })
      .then(() => {
        setEditing(null);
        fetchProducts();
      })
      .catch((err) => {
        alert(err.response?.data?.error || "Gagal edit produk");
      });
  };

  // hapus produk
  const handleDeleteProduct = (id) => {
    if (window.confirm("Yakin hapus produk ini?")) {
      axios
        .delete(`http://localhost:8080/api/admin/products/${id}`, {
          withCredentials: true,
        })
        .then(() => fetchProducts())
        .catch((err) => {
          alert(err.response?.data?.error || "Gagal hapus produk");
        });
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div className="p-6 pt-20 mt">

      {/* Tombol buka modal */}
      <button
        onClick={() => setShowModal(true)}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition mb-6"
      >
        Tambah Produk
      </button>

      {/* Modal tambah produk */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Tambah Produk</h2>
            <form onSubmit={handleAddProduct}>
              <input
                type="text"
                placeholder="Nama Produk"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
                className="border p-2 rounded w-full mb-3"
                required
              />
              <textarea
                placeholder="Deskripsi"
                value={newProduct.description}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, description: e.target.value })
                }
                className="border p-2 rounded w-full mb-3"
                rows={3}
              />
              <input
                type="number"
                placeholder="Harga"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: Number(e.target.value) })
                }
                className="border p-2 rounded w-full mb-3"
                required
              />
              <input
                type="number"
                placeholder="Stok"
                value={newProduct.stock}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, stock: Number(e.target.value) })
                }
                className="border p-2 rounded w-full mb-3"
                required
              />
              <input
                type="text"
                placeholder="URL Gambar"
                value={newProduct.image_url}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image_url: e.target.value })
                }
                className="border p-2 rounded w-full mb-4"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Daftar produk */}
      {products.length === 0 ? (
        <p className="text-gray-500 text-lg">Tidak ada produk</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.ID}
              className="bg-white border rounded-xl shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition"
            >
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              {editing === product.ID ? (
                <>
                  <input
                    type="text"
                    defaultValue={product.name}
                    onChange={(e) =>
                      setProducts((prev) =>
                        prev.map((p) =>
                          p.ID === product.ID ? { ...p, name: e.target.value } : p
                        )
                      )
                    }
                    className="border p-2 rounded mb-2"
                  />
                  <input
                    type="number"
                    defaultValue={product.price}
                    onChange={(e) =>
                      setProducts((prev) =>
                        prev.map((p) =>
                          p.ID === product.ID
                            ? { ...p, price: Number(e.target.value) }
                            : p
                        )
                      )
                    }
                    className="border p-2 rounded mb-2"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        handleEditProduct(product.ID, {
                          name: product.name,
                          price: Number(product.price),
                        })
                      }
                      className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                    >
                      Simpan
                    </button>
                    <button
                      onClick={() => setEditing(null)}
                      className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
                    >
                      Batal
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="font-semibold text-xl text-gray-800 mb-1">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 text-sm mb-2">
                    {product.description}
                  </p>
                  <p className="text-gray-600 mb-1">
                    Stok: <span className="font-medium">{product.stock}</span>
                  </p>
                  <p className="text-gray-800 mb-4">
                    Harga:{" "}
                    <span className="font-bold text-green-600">
                      Rp {Number(product.price).toLocaleString()}
                    </span>
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditing(product.ID)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product.ID)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                    >
                      Hapus
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
