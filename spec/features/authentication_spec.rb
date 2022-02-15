require 'rails_helper'

describe "the signin process", type: :feature do
   let!(:user) do
      User.create(username: 'username', password: 'password')
    end
  
    it "signs me in" do
      visit '/'
      within("#log_in_form") do
        fill_in 'username', with: user.username
        fill_in 'Password', with: user.password
      end
      click_button 'Sign in'
      expect(page).to have_content 'My Pet Pals'
    end
  end