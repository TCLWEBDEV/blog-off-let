import React, { useEffect, useState } from 'react'
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  FilledInput
} from "@material-ui/core";
import InputMask from 'react-input-mask';
import {
  makeStyles,
} from "@material-ui/core/styles";
import Dropzone from 'react-dropzone';
import {
  Button,
} from "react-bootstrap";
import { GoSearch } from 'react-icons/go';
import { MdLocalOffer } from 'react-icons/md';
import { HiShoppingBag } from 'react-icons/hi';

import { Container, SearchInput, DropContainer, UploadMessage, Ghost } from './styles';
import api from '../../services/api';
import { findSite } from '../../utils/findSite';
import { uploadImageToStorage } from '../../Firebase/uploadImage';

// interface IForm {
//   link:string;
//   name?:string;
//   description?:string;
//   category: string;
//   price?: number;
//   promoPrice?: number;
//   type: 'AFFILIATE_LINK' | 'PROMOTIONAL';
//   discount?: number;
//   plataform?: string;
// }
interface IImg {
  url: string;
  displayPriority: number;
}
interface IProduct {
  id: string;
  countryIso: string;
  title: string;
  modelReference: string;
  description?: string;
  sectionId: string;
  images: IImg[];
}
const Offlet: React.FC = () => {
  const [productModel, setProductModel] = useState<IProduct>();
  const [success, setSuccess] = useState<boolean>(false);
  const [affiliate, setAffiliate] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [filesPreview, setFilesPreview] = useState<any>();
  const [filesPreview1, setFilesPreview1] = useState<any>();
  const [filesPreview2, setFilesPreview2] = useState<any>();
  const [filesPreview3, setFilesPreview3] = useState<any>();
  const [plataform, setPlataform] = useState<string>();
  const [token, setToken] = useState<string>();
  const [categories, setCategories] = useState<any>();
  const [file, setFile] = useState<any>();
  const [keys, setKeyword] = useState<any>();
  const [product, setProduct] = useState<any>();
  const [expiresIn, setExpiresIn] = useState<string>();
  const [fileMain, setFileMain] = useState<any>();
  const [file1, setFile1] = useState<any>();
  const [file2, setFile2] = useState<any>();
  const [state, setState] = useState<any>();
  const [form, setForm] = React.useState<any>({
    category: "",
    link: "",
    affiliate,
  });

  const handlePreview = async (files: any) => {
    const preview = URL.createObjectURL(files?.[0]);
    setFilesPreview1(preview);
    setFile(files);
  };
  const handlePreviewMain = async (files: any) => {

    const preview = URL.createObjectURL(files?.[0]);
    setFilesPreview(preview);
    setFileMain(files);
  };
  const handlePreviewOne = async (files: any) => {
    const preview = URL.createObjectURL(files?.[0]);
    setFilesPreview2(preview);
    setFile1(files);
  };
  const handlePreviewTwo = async (files: any) => {
    const preview = URL.createObjectURL(files?.[0]);
    setFilesPreview3(preview);
    setFile2(files);
  };
  const loadProduct = async (linkProduct: string) => {

    // const data1 = {
    //   data: {
    //   link: form?.link,
    //   name: form?.name,
    //   description: form?.description,
    //   price: form?.price,
    //   promoPrice: form?.promoPrice,
    //   discount: form?.discount,
    //   plataform: plataform,
    //   category: form?.category,
    //   affiliate,
    //   photos: {
    //     mainPh: 'sss'
    //   }
    // }}
    if(linkProduct) {

    const data = {
      products: [
        {
          client_id: '7',
          url: linkProduct,
        }
      ]
    };

    // const response = await fetch('https://dev-offlet-scrapping.snowmanlabs.com/api/v1/product/view_data', {
    const response = await fetch('https://services.off-let.com/api/v1/product/view_data/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
      body: JSON.stringify(data),
    });

    const productApi =  await response.json();
    console.log('aqui request: ', productApi['7']);
    if(!productApi['7']) {
      return;
    }
    if (productApi['7']?.image_url) {
      setFilesPreview(productApi['7']?.image_url);
    }

    setForm({
      ...form,
      name: productApi['7']?.product_title ? productApi['7'].product_title: '',
      description: productApi['7']?.description ? productApi['7'].description: '',
      promoPrice: productApi['7']?.price ? Number(productApi['7'].price): 0,
    })

  }

}

  useEffect(() => {
    loadProduct(form.link);
    const site = findSite(form.link);
    setPlataform(site);
  }, [form.link])


  const useStyles2 = makeStyles(theme => ({

    brandOffletNav: {
      height: 104,
      textAlign: 'center'
    },

    brandOffletNavImg: {
      width: 'auto',
      height: '100%',
    },
    checkboxtext: {
      color: '#0D3F67',
      fontWeight: 400,
      fontSize: '13px',
      lineHeight: '14.52px',
      marginLeft: '12px',
    },
    checkboxdiv: {
      display: 'flex',
      alignItems: 'center',
      margin: '9px',
    },

    offletContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },

    inputSearch: {

    },

    textField: {
      marginTop: 7,
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 800,
      backgroundColor: "#ffffff",
      borderRadius: 12,
      border: "none",
      [theme.breakpoints.down('sm')]: {
        width: 300
      },
    },
    dense: {
      marginTop: theme.spacing(2)
    },
    btn: {
      backgroundColor: "#e83c4d",
      color: "#ffffff",
      border: "none",
      width: 117,
      height: 32,
      borderRadius: 6
    },
    btn2: {
      backgroundColor: "#212e63",
      color: "#ffffff",
      border: "none",
      width: 117,
      height: 32,
      borderRadius: 6,
      margin: 14
    },
    btn3: {
      backgroundColor: "transparent",
      border: "none",
      color: "#ffff",
      width: 14
    },
    btn4: {
      backgroundColor: "#212e63",
      color: "#ffffff",
      border: "none",
      width: 149,
      height: 42,
      borderRadius: 8,
      margin: 14,
      fontWeight: "bold",
      marginLeft: theme.spacing(33),
      marginRight: theme.spacing(33),
      [theme.breakpoints.down('sm')]: {
        marginLeft: "27%",
        marginRight: 0,
      },
    },
    btn5: {
      backgroundColor: "#212e63",
      opacity: 0.5,
      color: "#ffffff",
      border: "none",
      width: 149,
      height: 42,
      borderRadius: 8,
      margin: 14,
      fontWeight: "bold",
      marginLeft: theme.spacing(33),
      marginRight: theme.spacing(33),
      [theme.breakpoints.down('sm')]: {
        marginLeft: "27%",
        marginRight: 0,
      },
    },
    icon: {
      right: 0
    },
    svgIco: {
      marginRight: 7
    },
    addOffer: {
      paddingTop: 10,
      width: 800,
      [theme.breakpoints.down('sm')]: {
        width: 350,
        marginLeft: 700,
        marginRight: 700,
      },
    },
    component0: {
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: "transparent",
      width: "100%",
      paddingBottom: 17,
      [theme.breakpoints.down('sm')]: {

      },
    },
    component1: {
      backgroundColor: '#ffffff',
      padding: 15,
      width: "100%",
      borderRadius: 8,
      [theme.breakpoints.down('sm')]: {
      },
    },
    span1:  {
      color: "#1a244c",
      fontSize: 23,
      fontWeight: "bold",
      [theme.breakpoints.down('sm')]: {
        fontSize: 9,
      },
    },
    spanProduct:  {
      color: "#1a244c",
      fontSize: 23,
      fontWeight: "bold",
      [theme.breakpoints.down('sm')]: {
        fontSize: 18,
      },
    },
    exit: {
      backgroundColor: "#212e63",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#ffffff",
      borderRadius: 6,
      height: 32,
      width: 32
    },
    top: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },
    select: {
      minWidth: 300
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    textFields: {
      paddingTop: 10,
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    models: {
      paddingTop: 10,
      width: '35%',
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    expires: {
      backgroundColor: '#f0ecec',
      borderBottomColor: '#000',
      borderTopColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      marginTop: '3%',
      height: '57px',
      width: '40%',
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    component2: {
      display: "flex",
      flexDirection: "column"
    },
    component3: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around"
    },
    component4: {
      backgroundImage: "url('/badge/badge-bg.png')",
      backgroundRepeat: "no-repeat",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: 54,
      width: 48,
      paddingTop: 12,
      [theme.breakpoints.down('sm')]: {
        height: 54,
        width: 78,
      },
    },
    small1: {
      color: "#ffffff",
      fontSize: 15,
      fontWeight: "bold"
    },
    description: {
      paddingTop: 10,
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    component7: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 20,
      width: "100%",
      [theme.breakpoints.down('sm')]: {
        width: 350
      },
    },
    component5: {
      backgroundColor: "#ffffff",
      width: 264,
      height: 197,
      borderRadius: 8,
      padding: 22,
      marginRight: 25,
      [theme.breakpoints.down('sm')]: {
        width: 104,
        height: 120,
        padding: 12,
      },
    },
    component6: {
      backgroundColor: "#ffffff",
      width: 456,
      height: 197,
      borderRadius: 8,
      padding: 22,
      [theme.breakpoints.down('sm')]: {
        height: 120,
        padding: 12,
        width: 254,
      },
    },
    component8: {
      display: "flex",
      flexDirection: "row",
    },
    addPh: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f7f7fa",
      width: 104,
      height: 104,
      borderRadius: 8,
      marginTop: 12,
      border: "solid 1px #e0e3eb"
    },
    home: {
      backgroundColor: "transparent",
      color: "#8e97bc",
      border: "solid 1px #8e97bc",
      width: 79,
      height: 40,
      borderRadius: 8,
      margin: 14,
      [theme.breakpoints.down('sm')]: {
      height: 30,
      margin: 4,
      width: 56,
      },
    },
    offer: {
      backgroundColor: "#0eca87",
      color: "#ffffff",
      border: "none",
      width: 103,
      height: 40,
      borderRadius: 8,
      margin: 14,
      [theme.breakpoints.down('sm')]: {
      height: 30,
      margin: 4,
      width: 65,
      },
    },
    containerSuccess: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: 790,
      [theme.breakpoints.down('sm')]: {
        width: 290,
      },
    },
    succesSpan: {
      color: "#212e63",
      fontWeight: "bold",
      textAlign: "left",
      fontSize: 29,
      [theme.breakpoints.down('sm')]: {
        fontSize: 12,
      },
    },
    successImg: {
      margin: 22,
      [theme.breakpoints.down('sm')]: {
        margin: 7,
        width: 111,
      },
    }
  }));

  const classes2 = useStyles2();
  const renderDragMessage = (isDragActive: any, isDragReject: any) => {
    if (!isDragActive) {
      return (
        <h1>+</h1>
      );
    }
    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado!</UploadMessage>;
    }
    return <UploadMessage type="success">Solte aqui ... </UploadMessage>;
  };

  const handleAddOffer = () => {
    setSuccess(false);
  }
  const handleViewOffer = () => {
    window.open(form?.link, '_blank');
  }
  const handleChange = (event) => {
    setState({
      value: event.target.value
    });
    console.log('values: ',event.target.value);
  };

  const handleChangeForm = name => event => {
    setForm({ ...form, [name]: event.target.value });
    const t = { ...form, [name]: event.target.value };
    console.log('formulario:  ', t)
  };

  const handleSubmit = async () => {
    if(!filesPreview) {
      alert('foto principal obrigatoria!')
      setLoading(false);
      return;
    }
    let ph1;
    let ph2;
    let ph3;
    let ph4;
    let isUpdateProduct = false;
    if (productModel) {
      if(filesPreview !== productModel.images[0]?.url) {
        const avatar = await uploadImageToStorage(fileMain, `${form?.name}-main`);
        ph1 = avatar as string;
        isUpdateProduct = true;
      }
      if(filesPreview1 && filesPreview1 !== productModel.images[1]?.url) {
        const avatar = await uploadImageToStorage(file, `${form?.name}-main`);
        ph2 = avatar as string;
        isUpdateProduct = true;
      }
      if(filesPreview2 && filesPreview2 !== productModel.images[2]?.url) {
        const avatar = await uploadImageToStorage(file1, `${form?.name}-main`);
        ph3 = avatar as string;
        isUpdateProduct = true;
      }
      if(filesPreview3 && filesPreview3 !== productModel.images[3]?.url) {
        const avatar = await uploadImageToStorage(file2, `${form?.name}-main`);[]
        ph4 = avatar as string;
        isUpdateProduct = true;
      }
      if (productModel.description !== form?.description || productModel.title !== form?.name) {
        isUpdateProduct = true;
      }
      if (isUpdateProduct) {
        const dataProduct = { // nao alterar a country
          title: form?.name,
          modelReference: form.model,
          sectionId: form?.category,
          description: form?.description,
          images: [
            {
              url: ph1,
              displayPriority: 1,
            },
            {
              url: ph2,
              displayPriority: 2,
            },
            {
              url: ph3,
              displayPriority: 3,
            },
            {
              url: ph4,
              displayPriority: 4,
            },
          ],
        }
        await api.put(`/products/${productModel.id}`, dataProduct);
      }

      try {
        const data = {
          advertiserLabel: plataform,
          type: affiliate ? 'AFFILIATE_LINK': 'PROMOTIONAL',
          url: form?.link,
          nicePrice: Number(form?.promoPrice),
          regularPrice: Number(form?.price),
          discount: Number(form?.discount),
          expiresIn, // format date '000'
        }
        await api.post(`/products/${productModel.id}/offers`, data);
        setForm({
          link: data.url,
          name: "",
          category: "",
          price: 0,
          promoPrice: 0,
          discount: 0,
          expires: '',
          model: '',
        });
        setProductModel(undefined);
        setSuccess(true);
        setFileMain(undefined);
        setFile(undefined);
        setFile1(undefined);
        setFile2(undefined);
        setFilesPreview(undefined);
        setFilesPreview1(undefined);
        setFilesPreview2(undefined);
        setFilesPreview3(undefined);
        setLoading(false);
        return;
      } catch (error) {
       alert('Preencha todos os campos!');
       setLoading(false);
       console.log('error na api:', error)
       return;
      }
    }
    if(filesPreview) {
      if (fileMain) {
        const avatar = await uploadImageToStorage(fileMain, `${form?.name}-main`);
        ph1 = avatar as string;
      } else {
        ph1 = filesPreview;
      }

    }
    if(filesPreview1) {
      const avatar = await uploadImageToStorage(file, `${form?.name}-main`);
      ph2 = avatar as string;
    }
    if(filesPreview2) {
      const avatar = await uploadImageToStorage(file1, `${form?.name}-main`);
      ph3 = avatar as string;
    }
    if(filesPreview3) {
      const avatar = await uploadImageToStorage(file2, `${form?.name}-main`);
      ph4 = avatar as string;
    }
    const newArrImgs = [];
    const arrImhg = [ph1, ph2, ph3, ph4];
    arrImhg.map( (img, i) => {
      if (img) {
        const newObj = {
          url: img,
          displayPriority: i + 1,
        }
        newArrImgs.push(newObj)
      }
    })

    const dataProduct = {
        countryIso: 'USA',
        title: form?.name,
        description: form?.description,
        modelReference: form?.model,
        sectionId: form?.category,// id da categoria
        images: newArrImgs,
    }
    try {
      const prodct = await api.post('/products', dataProduct);
      const data = {
        advertiserLabel: plataform,
        type: affiliate ? 'AFFILIATE_LINK': 'PROMOTIONAL',
        url: form?.link,
        nicePrice: Number(form?.promoPrice),
        regularPrice: Number(form?.price),
        discount: Number(form?.discount),
        expiresIn, // formatar expire in
      }
      await api.post(`/products/${prodct.data.id}/offers`, data);
      setForm({
        link: data.url,
        description: "",
        category: "",
        price: 0,
        promoPrice: 0,
        discount: 0,
      });
      setProductModel(undefined);
      // setForm({
      //   category: "",
      //   link: "",
      //   affiliate,
      // })
      setFileMain(undefined);
      setFile(undefined);
      setFile1(undefined);
      setFile2(undefined);
      setFilesPreview(undefined);
      setFilesPreview1(undefined);
      setFilesPreview2(undefined);
      setFilesPreview3(undefined);
      setLoading(false);
      setSuccess(true);
    } catch (error) {
     alert('Preencha todos os campos!');
     setLoading(false);
     console.log('error na api:', error)
    }
  }
  const handleHome = () => {
    window.location.href = '/'
  }
  useEffect(() => {
    const loadCategories = async () => {
      const response = await api.get('/sections');
      setCategories(response.data);
      // const dataAccess = {
      //   email: 'admin@admin.net',
      //   password: 'uListsuperuser@password',
      //  }
      // // const responseToken = await fetch('https://dev-offlet-scrapping.snowmanlabs.com/api/v1/auth/sign-in/', {
      // const responseToken = await fetch('https://services.off-let.com/api/v1/auth/sign-in/', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(dataAccess),
      // });
      // const tokenApi =  await responseToken.json();
      // if (tokenApi) {
      //   const tokenString = `Bearer ${tokenApi.access}`;
      //   setToken(tokenString);
      // }
    }
    loadCategories();

  }, [])
  useEffect(() => {
    const loadProduct = async () => {
      if (!keys) {
        return;
      }
      const response = await api.get('/products',
      {
        params: {
          countryIso: 'USA',
          keyword: keys,
          qtyPerPage: 7,
        }
      });
      console.log(response.data);
      setProduct(response.data.data);
    }
    loadProduct();
    if (productModel) {
      setForm({
        ...form,
        name: productModel.title,
        category: productModel.sectionId,
        description: productModel?.description,
        model: productModel?.modelReference,
      });
      setFilesPreview(productModel.images[0]?.url);
      setFilesPreview1(productModel.images[1]?.url);
      setFilesPreview2(productModel.images[2]?.url);
      setFilesPreview3(productModel.images[3]?.url);
    }

  }, [keys, productModel]);

  useEffect(() => {

    const newNumber = String(form?.price);
    const cent = newNumber.split('.');
    const numberEnd = cent[0].replaceAll(',', '');

    const newNumberPromo = String(form?.promoPrice);
    const centPromo = newNumberPromo.split('.');
    const numberEndPromo = centPromo[0].replaceAll(',', '');

    console.log('promo number: ', numberEndPromo);
    console.log('number: ', numberEnd);

    const val = (Number(numberEndPromo) * 100) / Number(numberEnd);
    const discounts = 100 - val;
    if(!discounts) {
      setForm({ ...form, ['discount']: 0 })
      return;
    }

    if(discounts < 1 || discounts > 99) {
      setForm({ ...form, ['discount']: 0 })
      return;
    }

    setForm({ ...form, ['discount']: Math.floor(discounts) })
    return;

  }, [form.price, form.promoPrice])

  useEffect(() => {
    // YYYY-MM-DDTHH:mm:ss.sssZ Z= +00
    if(form.expires?.length >= 16 && form.expires.search('_') === -1) {
      const today = new Date(`${form.expires}:00`);
      console.log({
        length: form.expires?.length,
        today,
        exp: form.expires,
      })
      const formatDate = today
      .toISOString()
      .replace('Z', ' +00')
      .replace('T', ' ')
      .replace('.', ':');
      setExpiresIn(formatDate);
    }

  }, [form.expires])

  const limitText = (title?: string) => {
    if(title && title.length > 44) {
      const newtitle = title.substr(0, 44);
      const newstring = `${newtitle}...`;
      return newstring;
    } else {
      return title;
    }
  }

  return (
    <Container>
      <div className="navbar">
        <div className="container">
            <div className="navba--section navbar--logo">
                <a href="https://off-let.com">
                  <img src="/logo-navbar.svg" alt="Offlet" />
                </a>
            </div>


        </div>
      </div>

      <div className={classes2.brandOffletNav}>
        <img src="/logo-offlet.png" className={classes2.brandOffletNavImg} />
      </div>

      <div className={classes2.offletContainer}>

        {/* <SearchInput>
          <TextField
          id="outlined-search"
          label="Search product or offer"
          type="search"
          value={keys}
          onChange={(event: any) => setKeyword(event.target.value)}
          className={`${classes2.textField} sm`}
          margin="normal"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <GoSearch className={classes2.icon} size={20} />
            )
          }}
        />
        </SearchInput> */}
        {
          product && product.map(p => (
            <button style={{
              border: 'solid 1px #212E63',
              width: '95%',
              backgroundColor: '#fff',
              padding: '7px',
            }}
            onClick={() => {
              setProductModel(p);
              setKeyword('');
              setProduct(undefined);
            }}
            >
              <span style={{
                color: '#212E63',
                fontSize: '17px',
              }}>
                {p.title}
              </span>
            </button>
          ))
        }


      {
        !success && (
          <div className={classes2.addOffer}>
              <div className={classes2.component0}>
                <span className={classes2.spanProduct}>New Offer</span>
                <div />
              </div>
              <div className={classes2.component1}>
                  <div className={classes2.top}>
                    <span className={classes2.spanProduct}>Product</span>
                    <FormControl variant="filled" className={classes2.formControl}>
                      <InputLabel htmlFor="filled-age-native-simple">Country</InputLabel>
                      <Select
                        native
                        value={'USA'}
                        onChange={(e: any) => handleChange(e)}
                        input={
                          <FilledInput name="Country" id="filled-age-native-simple" />
                        }
                      >
                      <option value={'USA'}>
                        USA
                      </option>
                      </Select>
                    </FormControl>
                  </div>
                  <div className={classes2.component2}>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                      <TextField
                        id="filled-name4"
                        label="Model"
                        className={classes2.models}
                        value={form?.model}
                        onChange={handleChangeForm("model")}
                        margin="normal"
                        variant="filled"
                        placeholder="Model"
                      />
                      <InputMask
                        id="filled-name4"
                        mask="9999-99-99 99:99"
                        label="Expires in"
                        className={classes2.expires}
                        value={form?.expires}
                        onChange={handleChangeForm("expires")}
                        margin="normal"
                        variant="filled"
                        placeholder="Expires in"
                      />
                    </div>
                    <TextField
                      id="filled-name"
                      label="Link"
                      className={classes2.textFields}
                      value={form?.link}
                      onChange={handleChangeForm("link")}
                      margin="normal"
                      variant="filled"
                      placeholder="https:// "
                    />
                    <TextField
                      id="filled-namea"
                      label=""
                      className={classes2.textFields}
                      value={plataform}
                      onChange={handleChangeForm("plataform")}
                      margin="normal"
                      variant="filled"
                      placeholder="Site"
                      disabled
                    />

                  {/* <div className={classes2.checkboxdiv}>
                    <input type="checkbox" onClick={(event) =>  setAffiliate(event.currentTarget.checked)} />
                    <small className={classes2.checkboxtext}>Affiliate Product</small>
                  </div> */}

                    <TextField
                      id="filled-name2"
                      label="Name"
                      className={classes2.textFields}
                      value={form?.name}
                      onChange={handleChangeForm("name")}
                      margin="normal"
                      variant="filled"
                      placeholder="Product's name"
                    />

                    <FormControl variant="filled" className={classes2.formControl}>
                      <InputLabel htmlFor="filled-age-native-simple">Select Category</InputLabel>
                      <Select
                        native
                        value={form?.category}
                        defaultValue={form?.category}
                        onChange={handleChangeForm("category")}
                        input={
                          <FilledInput name="Category" id="filled-age-native-simple" />
                        }
                      >
                        {
                          categories?.map( (cat: any) => (
                            <option key={cat.id} value={cat.id}>
                              {cat.name}
                            </option>
                          ))
                        }
                      </Select>
                </FormControl>

                    <TextField
                      id="filled-name3"
                      label="Description"
                      multiline
                      rows="4"
                      className={classes2.description}
                      value={form?.description}
                      onChange={handleChangeForm("description")}
                      margin="normal"
                      variant="filled"
                      placeholder=" -- "
                    />
                  <div className={classes2.component3}>
                    <TextField
                      id="filled-name4"
                      label="Price"
                      className={classes2.textFields}
                      value={form?.price}
                      onChange={handleChangeForm("price")}
                      margin="normal"
                      variant="filled"
                      placeholder="$ 0,00"
                    />
                    <TextField
                      id="filled-name5"
                      label="Offer"
                      className={classes2.textFields}
                      value={form?.promoPrice}
                      onChange={handleChangeForm("promoPrice")}
                      margin="normal"
                      variant="filled"
                      placeholder="$ 0,00"
                    />
                    <div className={`${classes2.component4} sm`}>
                        <small className={classes2.small1}>{form.discount}%</small>
                        <small className={classes2.small1}>OFF</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${classes2.component7} sm`}>
                <div className={classes2.component5}>
                  <span className={classes2.span1}>Main Image</span>
                  <Dropzone accept="image/*" onDropAccepted={handlePreviewMain}>
                        {({
                          getRootProps,
                          getInputProps,
                          isDragActive,
                          isDragReject,
                        }) => (
                          <DropContainer
                            {...getRootProps()}
                            isDragActive={isDragActive} // aceitar img
                            isDragReject={isDragReject}
                            img={filesPreview}
                          >
                            <input {...getInputProps()} />
                            {renderDragMessage(isDragActive, isDragReject)}
                          </DropContainer>
                        )}
                    </Dropzone>
                </div>
                <article style={{
                  padding: 0,
                  width: '60%',
                }} className="cardnewsh">
                          <div className="cardnewshh" style={{
                            width: '100%',
                          }}>
                              <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                maxWidth: '40%',
                                minWidth: '40%',
                                maxHeight: '85%',
                                minHeight: '85%',
                                backgroundColor: '#f8f8fa',
                              }} className="cardnews__image">

                                <div style={{
                                  maxHeight: '100%',
                                  maxWidth: '100%',
                                  display: 'flex',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  margin: 0,
                                  padding: 0,
                                  border: 'none',
                                  backgroundColor: '#f8f8fa',
                                }} className="cardnews__image">
                                    <img style={{
                                      backgroundColor: '#f8f8fa',
                                      // maxWidth: '100%',
                                      // minWidth: '90%',
                                      // maxHeight: '100%',
                                      // minHeight: '90%',
                                      height: '100%',
                                      width: '100%',
                                      objectFit: 'contain',
                                    }} src={filesPreview ? filesPreview : 'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png'} alt="" />
                                </div>
                              </div>

                              <div className="cardnews__body" style={{
                                padding: 0,
                              }}>
                                  <div className="cardnews__content" style={{
                                    padding: 0,
                                  }}>
                                      <h4 style={{
                                        color: '#212e63',
                                        fontSize: '1.125rem',
                                        fontWeight: 'bolder',
                                        lineHeight: '25px',
                                        marginTop: 0,
                                        marginBottom: '8px',
                                      }}>
                                      {
                                        limitText(form?.name)
                                      }
                                      </h4>
                                      <div className="cardnews__prices"
                                      style={{padding: 0, width: '100%'}}
                                      >
                                          <span style={{
                                            textDecoration: 'line-through',
                                            color: '#7981a1',
                                            fontSize: '0.8125rem',
                                            fontWeight: 'normal',
                                            lineHeight: '18px',
                                            marginBottom: '4px',
                                            }}>
                                              {form?.price}
                                          </span>
                                          <span style={{
                                            color: '#212e63',
                                            fontSize: '1.125rem',
                                            fontWeight: 500,
                                            lineHeight: '25px',
                                          }}>
                                          ${form?.promoPrice}
                                          </span>
                                          <span style={{
                                          }} className="badge-price">
                                              ${form?.discount}% OFF
                                          </span>

                                      </div>
                                      <small className="site-offer">
                                          <svg width="20" height="20" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M1.19802 1.9387C1.04129 1.48014 1.47964 1.04151 1.9383 1.19794L10.5374 4.1307C10.9462 4.27011 11.067 4.7899 10.7616 5.09528L9.01979 6.83711L12.6625 10.4798C12.8903 10.7076 12.8903 11.077 12.6625 11.3048L11.3047 12.6625C11.0769 12.8903 10.7076 12.8903 10.4798 12.6625L6.83533 9.01809L5.0935 10.7453C4.78771 11.0485 4.27005 10.9272 4.13078 10.5197L1.19802 1.9387ZM2.68624 2.68568L4.93349 9.26096L6.83881 7.37165L10.8922 11.4251L11.425 10.8923L7.36987 6.83711L9.2744 4.93259L2.68624 2.68568Z"
                                                  fill="#7A82A2" />
                                          </svg>
                                          {plataform}
                                      </small>
                                  </div>
                              </div>
                          </div>
                </article>
              </div>
              {
                !loading ? (
                  <Button className={classes2.btn4} onClick={() => {
                    setLoading(true);
                    handleSubmit();
                  }}>
                    UPLOAD
                  </Button>
                ):(
                  <Button className={classes2.btn5}>
                    UPLOAD
                  </Button>
                )
              }
          </div>
        )}
        </div>
      {
        success && (
          <div className={classes2.containerSuccess}>
            <img className={classes2.successImg} src="/gp/gp.png" />
            <div>
              <span className={classes2.succesSpan}>
              Your offer has been successfully registered!
              </span>
              <div>
                <Button className={classes2.home} onClick={() => {
                  handleHome();
                  setForm({link: ''});
                }}>
                  Home
                </Button>
                <Button className={classes2.offer} onClick={handleViewOffer}>
                  See Offer
                </Button>
                <Button className={classes2.btn} onClick={() => {
                  setForm({link: ''});
                  handleAddOffer();
                }}>
                  <MdLocalOffer size={12} className={classes2.svgIco}/>
                  New Offer
                </Button>
              </div>
            </div>
          </div>
        )
      }


    </Container>
  )
}

export default Offlet;
