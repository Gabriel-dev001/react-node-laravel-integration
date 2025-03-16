const FilmeService = require("../src/services/filmeService");
const Filme = require("../src/models/filmeModel");

// Mocka o model para não acesar o banco
jest.mock("../src/models/filmeModel");

describe("FilmeService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  // Teste Criar Filme
  test("Deve criar um filme com sucesso", async () => {
    const filmeData = {
      categoria_id: 1,
      nome: "Vingadores",
      imagem_url: "url_imagem",
    };
    const mockFilme = { id: 1, ...filmeData };

    Filme.create.mockResolvedValue(mockFilme);

    const result = await FilmeService.create(filmeData);
    expect(result).toEqual(mockFilme);
    expect(Filme.create).toHaveBeenCalledWith(filmeData);
  });

  // Teste retornar todos os filmes
  test("Deve retornar todos os filmes", async () => {
    const mockFilmes = [
      { id: 1, categoria_id: 1, nome: "Vingadores", imagem_url: "url1" },
      { id: 2, categoria_id: 2, nome: "Batman", imagem_url: "url2" },
    ];

    Filme.getAll = jest.fn().mockResolvedValue(mockFilmes);

    const result = await FilmeService.getAll();

    expect(result).toEqual(mockFilmes);
    expect(Filme.getAll).toHaveBeenCalledTimes(1);
  });

  // teste buscar filme por ID
  test("Deve buscar um filme por ID", async () => {
    const mockFilme = {
      id: 1,
      categoria_id: 1,
      nome: "Vingadores",
      imagem_url: "url1",
    };

    Filme.getById = jest.fn().mockResolvedValue(mockFilme);

    const result = await FilmeService.getById(1);

    expect(result).toEqual(mockFilme);
    expect(Filme.getById).toHaveBeenCalledWith(1);
  });

  // Teste criar sem id_categora e nome 
  test("Deve falhar ao tentar criar um filme sem categoria_id ou sem nome", async () => {
    const filmeDataInvalido1 = { nome: "Vingadores", imagem_url: "url_imagem" }; // Sem categoria_id
    const filmeDataInvalido2 = { categoria_id: 1, imagem_url: "url_imagem" }; // Sem nome

    await expect(FilmeService.create(filmeDataInvalido1)).rejects.toThrow(
      "O ID da categoria e o nome do filme são obrigatórios!"
    );

    await expect(FilmeService.create(filmeDataInvalido2)).rejects.toThrow(
      "O ID da categoria e o nome do filme são obrigatórios!"
    );
  });

  // Teste buscar pelo ID
  test("Deve buscar um filme pelo ID", async () => {
    const mockFilme = {
      id: 1,
      categoria_id: 1,
      nome: "Vingadores",
      imagem_url: "url_imagem",
    };

    Filme.getById.mockResolvedValue(mockFilme);

    const result = await FilmeService.getById(1);
    expect(result).toEqual(mockFilme);
    expect(Filme.getById).toHaveBeenCalledWith(1);
  });

  // Teste atualizar o filme
  test("Deve atualizar um filme com sucesso", async () => {
    const id = 1;
    const updateData = {
      categoria_id: 2,
      nome: "Homem de Ferro",
      imagem_url: "nova_url",
    };
    const mockFilme = { id, ...updateData };

    Filme.getById = jest.fn().mockResolvedValue(mockFilme);
    Filme.update = jest.fn().mockResolvedValue(mockFilme);

    const result = await FilmeService.update(id, updateData);

    expect(result).toEqual(mockFilme);
    expect(Filme.getById).toHaveBeenCalledWith(id);
    expect(Filme.update).toHaveBeenCalledWith(id, updateData);
  });

  // Teste deletar Filme
  test("Deve deletar um filme com sucesso", async () => {
    const id = 1;
    Filme.getById = jest.fn().mockResolvedValue({ id });
    Filme.delete = jest.fn().mockResolvedValue();

    await expect(FilmeService.delete(id)).resolves.toBeUndefined();

    expect(Filme.getById).toHaveBeenCalledWith(id);
    expect(Filme.delete).toHaveBeenCalledWith(id);
  });
});

// Rodar esse arquivo de teste:
// npm test -- tests/filmeService.test.js