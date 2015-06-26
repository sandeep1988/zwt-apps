class WelcomeController < ApplicationController
	layout false
  def index
  end
  def forget_password_developer
  end
  def edit_user
    end
   private
    # Use callbacks to share common setup or constraints between actions.
    def set_sale
      @sale = Sale.find(1)
    end
    # Never trust parameters from the scary internet, only allow the white list through.
end