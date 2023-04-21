/*
#Task 3 - Create add product form with following fields.

    Product name
    Product description
    Product images or videos
    Price
    Availability
    Shipping information
    Product dimensions
    Product weight
    Material and construction
    Product features
    Reviews and ratings
    Related products
    Frequently Asked Questions (FAQs)
    Warranty information
    Return policy
related products ma as a input koi existing product ni I'd levani k pa6i koi product nu name?
product ids in array format


which are required fields?
    Product name textbox (required)
    Product description textarea (required)
    Product images or videos multiple images (optional)
    Price integer (required)
    Availability boolean (required)
    Shipping information textarea optional
    Product dimensions textbox optional
    Product weight textbox optional
    Material and construction textarea optional
    Product features textarea (required)
    Reviews and ratings (will be displayed on the details page so not required in add form)
    Related products (product selection from the array) optional
    Frequently Asked Questions (FAQs) WYSIWYG editor optional
    Warranty information textarea optional
    Return policy textarea optional

*/

import React from 'react'
import Sidebar from '../pages/Sidebar'
import { Box, Radio, RadioGroup, Stack } from '@mui/material'
import Navbar from '../pages/Navbar'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';

import '../Dash.css'




const AddProduct = () => {
    const formik = useFormik({
        initialValues: {
            productname: '',
            productdescription: '',
            productimages: '',
            price: '',
            availability: '',
            shippinginformation: '',
            productdimensions: '',
            productweight: '',
            materialandconstruction: '',
            productfeatures: '',
            relatedproducts: '',
            frequentlyaskedquestions: '',
            warrantyinformation: '',
            returnpolicy: '',
        },
        validationSchema: Yup.object({
            productname: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Product name is required'),
            productdescription: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Product description is required'),
            productimages: Yup.string()
                .max(20, 'Must be 20 characters or less'),
            price: Yup.number()
                .required('Price is required'),
            availability: Yup.boolean()
                .required('Availability is required'),
            shippinginformation: Yup.string()
                .max(20, 'Must be 20 characters or less'),
            productdimensions: Yup.string()
                .max(20, 'Must be 20 characters or less'),
            productweight: Yup.string()
                .max(20, 'Must be 20 characters or less'),
            materialandconstruction: Yup.string()
                .max(20, 'Must be 20 characters or less'),
            productfeatures: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Product features is required'),
            relatedproducts: Yup.string()
                .max(20, 'Must be 20 characters or less'),
            frequentlyaskedquestions: Yup.string()
                .max(20, 'Must be 20 characters or less'),
            warrantyinformation: Yup.string()
                .max(20, 'Must be 20 characters or less'),
            returnpolicy: Yup.string()
                .max(20, 'Must be 20 characters or less'),


        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    })
    return (
        <>
            <div className='bgcolor'>
                <Navbar />
                <Box height={55} />
                <Box sx={{ display: 'flex' }}>
                    <Sidebar />
                    <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
                        <Grid item xs={12}>
                            <Card sx={{ minWidth: 40 + '%', height: 100, bgcolor: '#575656' }}>
                                <CardContent sx={{
                                    margin: 5 + 'px',
                                }}>
                                    <div className='addproductmaincard' sx={{
                                        margin: 75 + 'px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',

                                    }}>
                                        Add Product
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Box height={20} />

                        <form onSubmit={formik.handleSubmit} sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            padding: 10,
                            margin: 10,
                            gap: 2,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 3,
                        }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Stack spacing={2} direction="row">
                                        <Card sx={{ minWidth: 49 + '%', height: 100 + '%' ,  bgcolor: '#575656' }}>
                                            <CardContent sx={{
                                                margin: 10 + 'px',
                                            }}>
                                                <div sx={{
                                                    margin: 100 + 'px',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',

                                                }}>
                                                    <Container maxWidth="sm" sx={{
                                                        marginTop: 0
                                                    }}>
                                                        <Box>
                                                            <>
                                                                <Card>
                                                                    <Grid container spacing={2}>
                                                                        <Grid item xs={12} sx={{
                                                                            padding: "10px 10px",
                                                                            justifyContent: 'center',
                                                                            alignItems: 'center',
                                                                            margin: 2,
                                                                        }}>

                                                                            <div style={{ margin: '10px 0', width: '100%' }} >
                                                                                <TextField
                                                                                    label="Product Name"
                                                                                    size='medium'
                                                                                    fullWidth
                                                                                    variant="outlined"
                                                                                    id="productname"
                                                                                    name="productname"
                                                                                    type="text"
                                                                                    onChange={formik.handleChange}
                                                                                    onBlur={formik.handleBlur}
                                                                                    value={formik.values.productname}
                                                                                />
                                                                                {formik.touched.productname && formik.errors.productname && (
                                                                                    <div style={{ color: "red", marginBottom: '15px', fontSize: '12px' }}>{formik.errors.productname}</div>
                                                                                )}

                                                                            </div>

                                                                            <div style={{ margin: '10px 0', width: '100%' }} >
                                                                                {/* { // Textarea for Product Description} */}
                                                                                <TextField
                                                                                    label="Product Description"
                                                                                    size='medium'
                                                                                    fullWidth
                                                                                    variant="outlined"
                                                                                    id="productdescription"
                                                                                    name="productdescription"
                                                                                    type="textarea"
                                                                                    onChange={formik.handleChange}
                                                                                    onBlur={formik.handleBlur}
                                                                                    value={formik.values.productdescription}
                                                                                />
                                                                                {formik.touched.productdescription && formik.errors.productdescription && (
                                                                                    <div style={{ color: "red", marginBottom: '15px', fontSize: '12px' }}>{formik.errors.productdescription}</div>
                                                                                )}

                                                                            </div>

                                                                            <div style={{ margin: '10px 0', width: '100%' }} >
                                                                                { /* // File Upload for Product Images multiple image */}
                                                                                <input
                                                                                    accept="image/*"
                                                                                    id="productimages"
                                                                                    name="productimages"
                                                                                    type="file"
                                                                                    multiple
                                                                                    onChange={formik.handleChange}
                                                                                    onBlur={formik.handleBlur}
                                                                                    value={formik.values.productimages}
                                                                                />
                                                                                {formik.touched.productimages && formik.errors.productimages && (
                                                                                    <div style={{ color: "red", marginBottom: '15px', fontSize: '12px' }}>{formik.errors.productimages}</div>
                                                                                )}



                                                                            </div>

                                                                            <div style={{ margin: '10px 0' }} >
                                                                                <TextField
                                                                                    label="Price"
                                                                                    size='medium'
                                                                                    fullWidth
                                                                                    variant="outlined"
                                                                                    id="price"
                                                                                    name="price"
                                                                                    type="number"
                                                                                    onChange={formik.handleChange}
                                                                                    onBlur={formik.handleBlur}
                                                                                    value={formik.values.price}
                                                                                />
                                                                                {formik.touched.price && formik.errors.price && (
                                                                                    <div style={{ color: "red", marginBottom: '15px', fontSize: '12px' }}>{formik.errors.price}</div>
                                                                                )}

                                                                            </div>

                                                                            <div style={{ margin: '10px 0' }} >
                                                                                {/*Availability boolean (required)    */}
                                                                                <FormControl component="fieldset">
                                                                                    <FormLabel component="legend">Availability</FormLabel>
                                                                                    <RadioGroup sx={{
                                                                                        display: 'flex',
                                                                                        flexDirection: 'row',
                                                                                    }}
                                                                                        aria-label="availability"
                                                                                        name="availability"
                                                                                        value={formik.values.availability}
                                                                                        onChange={formik.handleChange}
                                                                                        onBlur={formik.handleBlur}
                                                                                    >
                                                                                        <FormControlLabel value="true" control={<Radio />} label="True" />
                                                                                        <FormControlLabel value="false" control={<Radio />} label="False" />
                                                                                    </RadioGroup>
                                                                                </FormControl>
                                                                                {formik.touched.availability && formik.errors.availability && (
                                                                                    <div style={{ color: "red", marginBottom: '15px', fontSize: '12px' }}>{formik.errors.availability}</div>
                                                                                )}

                                                                            </div>

                                                                            <div style={{ margin: '10px 0' }} >
                                                                                { /* Shipping information textarea optional */}
                                                                                <TextField
                                                                                    label="Shipping Information"
                                                                                    size='medium'
                                                                                    fullWidth
                                                                                    variant="outlined"
                                                                                    id="shippinginformation"
                                                                                    name="shippinginformation"
                                                                                    type="text"
                                                                                    onChange={formik.handleChange}
                                                                                    onBlur={formik.handleBlur}
                                                                                    value={formik.values.shippinginformation}
                                                                                />
                                                                                {formik.touched.shippinginformation && formik.errors.shippinginformation && (
                                                                                    <div style={{ color: "red", marginBottom: '15px', fontSize: '12px' }}>{formik.errors.shippinginformation}</div>
                                                                                )}

                                                                            </div>

                                                                            <div style={{ margin: '10px 0' }} >
                                                                                { /*  Product dimensions textbox optional */}
                                                                                <TextField
                                                                                    label="Product Dimensions"
                                                                                    size='medium'
                                                                                    fullWidth
                                                                                    variant="outlined"
                                                                                    id="productdimensions"
                                                                                    name="productdimensions"
                                                                                    type="text"
                                                                                    onChange={formik.handleChange}
                                                                                    onBlur={formik.handleBlur}
                                                                                    value={formik.values.productdimensions}
                                                                                />
                                                                                {formik.touched.productdimensions && formik.errors.productdimensions && (
                                                                                    <div style={{ color: "red", marginBottom: '15px', fontSize: '12px' }}>{formik.errors.productdimensions}</div>
                                                                                )}

                                                                            </div>

                                                                            <div style={{ margin: '10px 0' }} >
                                                                                <TextField
                                                                                    label="Product Weight"
                                                                                    size='medium'
                                                                                    fullWidth
                                                                                    variant="outlined"
                                                                                    id="productweight"
                                                                                    name="productweight"
                                                                                    type="number"
                                                                                    onChange={formik.handleChange}
                                                                                    onBlur={formik.handleBlur}
                                                                                    value={formik.values.productweight}
                                                                                />
                                                                                {formik.touched.productweight && formik.errors.productweight && (
                                                                                    <div style={{ color: "red", marginBottom: '15px', fontSize: '12px' }}>{formik.errors.productweight}</div>
                                                                                )}

                                                                            </div>

                                                                        </Grid>
                                                                    </Grid>
                                                                </Card>
                                                            </>
                                                        </Box>
                                                    </Container>
                                                </div>
                                            </CardContent>
                                        </Card>
                                        <Card sx={{ minWidth: 49 + '%', minheight: 100 + '%', bgcolor: '#575656' }}>
                                            <CardContent sx={{
                                                margin: 10 + 'px',
                                            }}>
                                                <div sx={{
                                                    margin: 100 + 'px',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',

                                                }}>
                                                    <Container maxWidth="sm" sx={{
                                                        marginTop: 0
                                                    }}>
                                                        <Box>
                                                            <>
                                                                <Card>
                                                                    <Grid container spacing={2}>
                                                                        <Grid item xs={12}>
                                                                        </Grid>
                                                                        <Grid item xs={12} sx={{
                                                                            // display: 'flex',
                                                                            // flexDirection: 'column',
                                                                            padding: "10px 10px",
                                                                            // gap: 2,
                                                                            justifyContent: 'center',
                                                                            alignItems: 'center',
                                                                            margin: 2,
                                                                        }}>


                                                                            <div style={{ margin: '10px 0' }} >
                                                                                {/* { Material and construction textarea optional} */}
                                                                                <TextField
                                                                                    label="Material and Construction"
                                                                                    size='medium'
                                                                                    fullWidth
                                                                                    variant="outlined"
                                                                                    id="materialandconstruction"
                                                                                    name="materialandconstruction"
                                                                                    type="text"
                                                                                    onChange={formik.handleChange}
                                                                                    onBlur={formik.handleBlur}
                                                                                    value={formik.values.materialandconstruction}
                                                                                />

                                                                                {formik.touched.materialandconstruction && formik.errors.materialandconstruction && (
                                                                                    <div style={{ color: "red", marginBottom: '15px', fontSize: '12px' }}>{formik.errors.materialandconstruction}</div>
                                                                                )}


                                                                            </div>

                                                                            <div style={{ margin: '10px 0' }} >
                                                                                {/* { Product features textarea (required)} */}
                                                                                <TextField
                                                                                    label="Product Features"
                                                                                    size='medium'
                                                                                    fullWidth
                                                                                    variant="outlined"
                                                                                    id="productfeatures"
                                                                                    name="productfeatures"
                                                                                    type="text"
                                                                                    onChange={formik.handleChange}
                                                                                    onBlur={formik.handleBlur}
                                                                                    value={formik.values.productfeatures}
                                                                                />
                                                                                {formik.touched.productfeatures && formik.errors.productfeatures && (
                                                                                    <div style={{ color: "red", marginBottom: '15px', fontSize: '12px' }}>{formik.errors.productfeatures}</div>
                                                                                )}

                                                                            </div>

                                                                            <div style={{ margin: '10px 0' }} >
                                                                                {/* { Related products (product selection from the array) optional} */}
                                                                                <TextField
                                                                                    label="Related Products"
                                                                                    size='medium'
                                                                                    fullWidth
                                                                                    variant="outlined"
                                                                                    id="relatedproducts"
                                                                                    name="relatedproducts"
                                                                                    type="text"
                                                                                    onChange={formik.handleChange}
                                                                                    onBlur={formik.handleBlur}
                                                                                    value={formik.values.relatedproducts}
                                                                                />
                                                                                {formik.touched.relatedproducts && formik.errors.relatedproducts && (
                                                                                    <div style={{ color: "red", marginBottom: '15px', fontSize: '12px' }}>{formik.errors.relatedproducts}</div>
                                                                                )}

                                                                            </div>

                                                                            <div style={{ margin: '10px 0' }} >
                                                                                {/* { Frequently Asked Questions (FAQs) WYSIWYG editor optional} */}
                                                                                <TextField
                                                                                    label="Frequently Asked Questions"
                                                                                    size='medium'
                                                                                    fullWidth
                                                                                    variant="outlined"
                                                                                    id="frequentlyaskedquestions"
                                                                                    name="frequentlyaskedquestions"
                                                                                    type="text"
                                                                                    onChange={formik.handleChange}
                                                                                    onBlur={formik.handleBlur}
                                                                                    value={formik.values.frequentlyaskedquestions}
                                                                                />

                                                                                {formik.touched.frequentlyaskedquestions && formik.errors.frequentlyaskedquestions && (
                                                                                    <div style={{ color: "red", marginBottom: '15px', fontSize: '12px' }}>{formik.errors.frequentlyaskedquestions}</div>
                                                                                )}
                                                                            </div>

                                                                            <div style={{ margin: '10px 0' }} >
                                                                                {/* { Warranty information textarea optional} */}
                                                                                <TextField
                                                                                    label="Warranty Information"
                                                                                    size='medium'
                                                                                    fullWidth
                                                                                    variant="outlined"
                                                                                    id="warrantyinformation"
                                                                                    name="warrantyinformation"
                                                                                    type="text"
                                                                                    onChange={formik.handleChange}
                                                                                    onBlur={formik.handleBlur}
                                                                                    value={formik.values.warrantyinformation}
                                                                                />

                                                                                {formik.touched.warrantyinformation && formik.errors.warrantyinformation && (
                                                                                    <div style={{ color: "red", marginBottom: '15px', fontSize: '12px' }}>{formik.errors.warrantyinformation}</div>
                                                                                )}
                                                                            </div>

                                                                            <div style={{ margin: '10px 0' }} >
                                                                                {/* { Return policy textarea optional} */}
                                                                                <TextField
                                                                                    label="Return Policy"
                                                                                    size='medium'
                                                                                    fullWidth
                                                                                    variant="outlined"
                                                                                    id="returnpolicy"
                                                                                    name="returnpolicy"
                                                                                    type="text"
                                                                                    onChange={formik.handleChange}
                                                                                    onBlur={formik.handleBlur}
                                                                                    value={formik.values.returnpolicy}
                                                                                />
                                                                                {formik.touched.returnpolicy && formik.errors.returnpolicy && (
                                                                                    <div style={{ color: "red", marginBottom: '15px', fontSize: '12px' }}>{formik.errors.returnpolicy}</div>
                                                                                )}
                                                                            </div>


                                                                            <button type="submit" className="btn btn-primary" style={{ width: '100%' , backgroundColor:'#575656' }}>Submit</button>
                                                                        </Grid>
                                                                    </Grid>
                                                                </Card>
                                                            </>
                                                        </Box>
                                                    </Container>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Stack>
                                </Grid>

                            </Grid>
                        </form>
                    </Box>
                </Box>
            </div >
        </>
    )
}

export default AddProduct