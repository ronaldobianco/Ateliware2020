require "application_system_test_case"

class RepositoriosTest < ApplicationSystemTestCase
  setup do
    @repositorio = repositorios(:one)
  end

  test "visiting the index" do
    visit repositorios_url
    assert_selector "h1", text: "Repositorios"
  end

  test "creating a Repositorio" do
    visit repositorios_url
    click_on "New Repositorio"

    fill_in "Data", with: @repositorio.data
    fill_in "Descricao", with: @repositorio.descricao
    fill_in "Img", with: @repositorio.img
    fill_in "Name", with: @repositorio.name
    fill_in "Text", with: @repositorio.text
    click_on "Create Repositorio"

    assert_text "Repositorio was successfully created"
    click_on "Back"
  end

  test "updating a Repositorio" do
    visit repositorios_url
    click_on "Edit", match: :first

    fill_in "Data", with: @repositorio.data
    fill_in "Descricao", with: @repositorio.descricao
    fill_in "Img", with: @repositorio.img
    fill_in "Name", with: @repositorio.name
    fill_in "Text", with: @repositorio.text
    click_on "Update Repositorio"

    assert_text "Repositorio was successfully updated"
    click_on "Back"
  end

  test "destroying a Repositorio" do
    visit repositorios_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Repositorio was successfully destroyed"
  end
end
