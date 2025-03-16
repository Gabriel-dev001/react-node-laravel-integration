const CategoriaService = require("../src/services/categoriaService");
const Categoria = require("../src/models/categoriaModel");

// Mocka o model para não acessar o banco
jest.mock("../src/models/categoriaModel");

describe("CategoriaService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  // Teste Criar Categoria
  test("Deve criar uma categoria com sucesso", async () => {
    const categoriaData = { nome: "Ação" };
    const mockCategoria = { id: 1, ...categoriaData };

    Categoria.create.mockResolvedValue(mockCategoria);

    const result = await CategoriaService.create(categoriaData);
    expect(result).toEqual(mockCategoria);
    expect(Categoria.create).toHaveBeenCalledWith(categoriaData);
  });

  // Teste retornar todas as categorias
  test("Deve retornar todas as categorias", async () => {
    const mockCategorias = [
      { id: 1, nome: "Ação" },
      { id: 2, nome: "Comédia" },
    ];

    Categoria.getAll = jest.fn().mockResolvedValue(mockCategorias);

    const result = await CategoriaService.getAll();

    expect(result).toEqual(mockCategorias);
    expect(Categoria.getAll).toHaveBeenCalledTimes(1);
  });

  // Teste buscar categoria por ID
  test("Deve buscar uma categoria por ID", async () => {
    const mockCategoria = { id: 1, nome: "Ação" };

    Categoria.getById = jest.fn().mockResolvedValue(mockCategoria);

    const result = await CategoriaService.getById(1);

    expect(result).toEqual(mockCategoria);
    expect(Categoria.getById).toHaveBeenCalledWith(1);
  });

  // Teste criar sem nome
  test("Deve falhar ao tentar criar uma categoria sem nome", async () => {
    const categoriaDataInvalida = {};

    await expect(CategoriaService.create(categoriaDataInvalida)).rejects.toThrow(
      "O nome da categoria é obrigatório"
    );
  });

  // Teste erro ao buscar categoria inexistente
  test("Deve falhar ao buscar uma categoria inexistente", async () => {
    Categoria.getById = jest.fn().mockResolvedValue(null);

    await expect(CategoriaService.getById(999)).rejects.toThrow(
      "Categoria não encontrada"
    );
  });

  // Teste atualizar categoria
  test("Deve atualizar uma categoria com sucesso", async () => {
    const id = 1;
    const updateData = { nome: "Terror" };
    const mockCategoria = { id, ...updateData };

    Categoria.getById = jest.fn().mockResolvedValue(mockCategoria);
    Categoria.update = jest.fn().mockResolvedValue(mockCategoria);

    const result = await CategoriaService.update(id, updateData);

    expect(result).toEqual(mockCategoria);
    expect(Categoria.getById).toHaveBeenCalledWith(id);
    expect(Categoria.update).toHaveBeenCalledWith(id, updateData);
  });

  // Teste falha ao atualizar categoria inexistente
  test("Deve falhar ao tentar atualizar uma categoria inexistente", async () => {
    Categoria.getById = jest.fn().mockResolvedValue(null);

    await expect(CategoriaService.update(999, { nome: "Drama" })).rejects.toThrow(
      "Categoria não encontrada"
    );
  });

  // Teste deletar categoria
  test("Deve deletar uma categoria com sucesso", async () => {
    const id = 1;
    Categoria.getById = jest.fn().mockResolvedValue({ id });
    Categoria.delete = jest.fn().mockResolvedValue();

    await expect(CategoriaService.delete(id)).resolves.toBeUndefined();

    expect(Categoria.getById).toHaveBeenCalledWith(id);
    expect(Categoria.delete).toHaveBeenCalledWith(id);
  });
});

// Rodar esse arquivo de teste:
// npm test -- tests/categoriaService.test.js