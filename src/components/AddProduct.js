

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
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import MUIEditor, { MUIEditorState } from "react-mui-draft-wysiwyg";
import '../Dash.css'
import { Textarea } from '@mui/joy';


const Editor = () => {
    const [editorState, setEditorState] = React.useState(
        MUIEditorState.createEmpty(),
    )
    const onChange = newState => {
        setEditorState(newState)
    }
    return <MUIEditor sx={{
        minwidth: '100%',
        minheight: '100%',
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '5px',
        fontSize: '16px',
    }} placeholder="Frequently Asked Questions (FAQs)" editorState={editorState} onChange={onChange} />
}


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
            productimages:
                /* image validation either image or multiple images */
                Yup.mixed(),
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
                            <Card sx={{ minWidth: 50 + '%', height: 75, bgcolor: '#575656' }}>
                                <CardContent sx={{
                                    margin: 1 + 'px',
                                }}>
                                    <div className='addproductmaincard' sx={{
                                        margin: 50 + 'px',
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
                        <Box height={10} />

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
                                        <Card sx={{ minWidth: 49 + '%', height: 100 + '%', bgcolor: '#575656' }}>
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
                                                                                <Textarea label="Product Description" id="productdescription" name="productdescription" placeholder='Product Description' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.productdescription} sx={{
                                                                                    width: 100 + '%',
                                                                                    height: 75 + 'px',
                                                                                }} />
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
                                                                                    sx={{
                                                                                        width: 100 + '%',
                                                                                        height: 75 + 'px',

                                                                                    }}
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
                                                                                <Textarea label="Shipping Information" id="shippinginformation" name="shippinginformation" placeholder='Shipping Information' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.shippinginformation} sx={{
                                                                                    width: 100 + '%',
                                                                                    height: 75 + 'px',
                                                                                }} />
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

                                                                            
                                                                        </Grid>
                                                                    </Grid>
                                                                </Card>
                                                            </>
                                                        </Box>
                                                    </Container>
                                                </div>
                                            </CardContent>
                                        </Card>
                                        <Card sx={{ minWidth: 50 + '%', minheight: 100 + '%', bgcolor: '#575656' }}>
                                            <CardContent sx={{
                                                margin: 5 + 'px',
                                            }}>
                                                <div sx={{
                                                    margin: 50 + 'px',
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
                                                                            // display: 'flex',
                                                                            // flexDirection: 'column',
                                                                            padding: "10px 10px",
                                                                            // gap: 2,
                                                                            justifyContent: 'center',
                                                                            alignItems: 'center',
                                                                            margin: 2,
                                                                        }}>
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

                                                                            <div style={{ margin: '10px 0' }} >
                                                                                {/* { Material and construction textarea optional} */}
                                                                                <Textarea label="Material and Construction" id="materialandconstruction" name="materialandconstruction" placeholder='Material and Construction' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.materialandconstruction} sx={{
                                                                                    width: 100 + '%',
                                                                                    height: 75 + 'px',
                                                                                }} />
                                                                                {formik.touched.materialandconstruction && formik.errors.materialandconstruction && (
                                                                                    <div style={{ color: "red", marginBottom: '15px', fontSize: '12px' }}>{formik.errors.materialandconstruction}</div>
                                                                                )}



                                                                            </div>


                                                                            <div style={{ margin: '10px 0' }} >
                                                                                {/* { Product features textarea (required)} */}
                                                                                <Textarea label="Product Features" id="productfeatures" name="productfeatures" placeholder='Product Feature' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.productfeatures} sx={{
                                                                                    width: 100 + '%',
                                                                                    height: 75 + 'px',
                                                                                }} />
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
                                                                                {/* { Warranty information textarea optional} */}
                                                                                <Textarea label="Warranty Information" id="warrantyinformation" name="warrantyinformation" placeholder='Warranty Information' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.warrantyinformation} sx={{
                                                                                    width: 100 + '%',
                                                                                    height: 75 + 'px',
                                                                                }} />
                                                                                {formik.touched.warrantyinformation && formik.errors.warrantyinformation && (
                                                                                    <div style={{ color: "red", marginBottom: '15px', fontSize: '12px' }}>{formik.errors.warrantyinformation}</div>
                                                                                )}
                                                                            </div>

                                                                            <div style={{ margin: '10px 0' }} >
                                                                                {/* { Return policy textarea optional} */}
                                                                                <Textarea label="Return Policy" id="returnpolicy" name="returnpolicy" placeholder='Return Policy' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.returnpolicy} sx={{
                                                                                    width: 100 + '%',
                                                                                    height: 75 + 'px',
                                                                                }} />
                                                                                {formik.touched.returnpolicy && formik.errors.returnpolicy && (
                                                                                    <div style={{ color: "red", marginBottom: '15px', fontSize: '12px' }}>{formik.errors.returnpolicy}</div>
                                                                                )}

                                                                            </div>


                                                                            {/* <button type="submit" className="btn btn-primary" style={{ width: '100%', backgroundColor: '#575656' }}>Add Product</button> */}
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
                                <Grid item xs={12}>
                                    <Card sx={{ minWidth: 50 + '%', height: 100 + '%', bgcolor: '#575656' }}>
                                        <CardContent sx={{
                                            margin: 1 + 'px',
                                        }}>
                                            <div className='addproductmaincard' sx={{
                                                margin: 50 + 'px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',

                                            }}>
                                                <div style={{ margin: '10px 0' }} >
                                                    {/* { Frequently Asked Questions (FAQs) WYSIWYG editor optional} */}
                                                    <Editor placeholder='Frequently Asked Questions (FAQs)' sx={{
                                                        width: 100 + '%',
                                                        height: 75 + 'px',
                                                        margin: 0 + 'px',
                                                        padding: 0 + 'px',
                                                    }} />
                                                </div>

                                                <button type="submit" className="btn btn-primary">Add Product</button>
                                            </div>
                                        </CardContent>
                                    </Card>
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