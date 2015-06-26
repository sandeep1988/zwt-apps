class SalesController < ApplicationController
  before_action :set_sale, only: [:show, :edit, :update, :destroy]

  # GET /sales
  # GET /sales.json
  def index
    @sales = Sale.all
  end

  # GET /sales/1
  # GET /sales/1.json
  def show
  end

  # GET /sales/new
  def new
    @sale = Sale.new
  end

  # GET /sales/1/edit
  def edit
  end

  # POST /sales
  # POST /sales.json
  def create
    @sale = Sale.new(sale_params)
    respond_to do |format|
      if @sale.save
        format.html { redirect_to @sale, notice: 'Sale was successfully created.' }
        format.json { render :show, status: :created, location: @sale }
      else
        format.html { render :new }
        format.json { render json: @sale.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /sales/1
  # PATCH/PUT /sales/1.json
  def update
    respond_to do |format|
      if @sale.update(sale_params)
        format.html { redirect_to @sale, notice: 'Sale was successfully updated.' }
        format.json { render :show, status: :ok, location: @sale }
      else
        format.html { render :edit }
        format.json { render json: @sale.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /sales/1
  # DELETE /sales/1.json
  def destroy
    @sale.destroy
    respond_to do |format|
      format.html { redirect_to sales_url, notice: 'Sale was successfully destroyed.' }
      format.json { head :no_content }
    end
  end
  
  def my_profile
  end
  
  def dashboard
  end

  def table_ajax
    #@test = $_REQUEST["customActionType"])
  #   @sEcho = params[:draw]
  #   @iDisplayStart = params[:start]
  #   @iDisplayLength = params[:length]
  #   @iTotalRecords = 178;

  #   if @iDisplayLength < 0
  #       @iDisplayLength = @iTotalRecords
  #   end

  #    @records = []
  #   @records["data"] = [] 

  # @end = @iDisplayStart + @iDisplayLength

  #   if @end > @iTotalRecords
  #      @end = @iTotalRecords
  #   end

  # @status_list = []
  # @status_list("success" => "Pending")
  # @status_list("info" => "Closed"),
  # @status_list("danger" => "On Hold")
  # @status_list("warning" => "Fraud")
  end
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sale
      @sale = Sale.find(1)
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def sale_params
      params.require(:sale).permit(:username, :password)
    end
end
