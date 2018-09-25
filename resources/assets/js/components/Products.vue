<template>
	<div class="col-md-12 col-sm-12 col-xs-12">
		<div class="x_panel">
			<div class="x_title">
				<h2>Products</h2>
				<router-link tag="button" to="/addProduct" class="btn btn-primary pull-right">Add Product</router-link>
				<div class="clearfix"></div>
			</div>

			<div class="x_content">

				<div class="table-responsive">
					<table class="table table-striped jambo_table bulk_action">
						<thead>
							<tr class="headings">
								<th>
									<div class="icheckbox_flat-green" style="position: relative;"><input type="checkbox" id="check-all" class="flat" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div>
								</th>
								<th class="column-title">Name </th>
								<th class="column-title">Total Price</th>
								<th class="column-title">Rating</th>
								<th class="column-title">Discount</th>
							</tr>
						</thead>

						<tbody>

							<tr class="even pointer" v-for="product in products">
								<td class="a-center ">
									<div class="icheckbox_flat-green" style="position: relative;"><input type="checkbox" class="flat" name="table_records" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div>
								</td>
								<td class=" ">{{product.name}}</td>
								<td class=" ">{{product.totalPrice}}</td>
								<td class=" ">{{product.rating}}</td>
								<td class=" ">{{product.discount}}</td>
							</tr>

						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
export default {
	data() {
		return {
			products: null,
		};
	},
	created() {
		this.fetchData();
	},
	methods: {
		fetchData() {
			fetch('/api/products')
			.then(res => res.json())
			.then(res => {
				this.products = res.data;
			})
			.catch(err => console.log(err));
		}
	}
}
</script>