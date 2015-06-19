json.array!(@sales) do |sale|
  json.extract! sale, :id, :first_name, :last_name, :email, :phone
  json.url sale_url(sale, format: :json)
end
