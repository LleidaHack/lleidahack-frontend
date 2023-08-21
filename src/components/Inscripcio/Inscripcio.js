import React, { useEffect, useState } from 'react';
import './Inscripcio.css';
import Select from 'react-select';
import debounce from 'lodash.debounce';


import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormikStepper, InputField, SelectField } from "formik-stepper";


const validationSchema = Yup.object().shape({
    studies: Yup.string().required('Aquest camp és obligatori'),
    center: Yup.string().required('Aquest camp és obligatori'),
    location: Yup.string().required('Aquest camp és obligatori'),
    size: Yup.string().required('Aquest camp és obligatori'),
    food: Yup.string().required('Aquest camp és obligatori'),
    meet: Yup.string().required('Aquest camp és obligatori'),
});

const InscripcioForm = () => {

    const sizeOptions = [
        { value: 'S', label: 'S' },
        { value: 'M', label: 'M' },
        { value: 'L', label: 'L' },
        { value: 'XL', label: 'XL' },
        { value: 'XXL', label: 'XXL' },
    ];

    const meetOptions = [
        { value: 'Xarxes socials', label: 'Xarxes socials' },
        { value: 'Un amic', label: 'Un amic' },
        { value: 'Altres edicions', label: 'Altres edicions' },
        { value: 'Cartells publicitaris', label: 'Cartells publicitaris' },
        { value: 'Altre mitjà', label: 'Altre mitjà' },
    ];

  const handleSubmit = (values) => {
    // Aquí puedes manejar la lógica de envío del formulario.
    console.log(values);
  };

  const [cityOptions, setCityOptions] = useState([]);
  const [cvFile, setCvFile] = useState(null);

  const fetchCities = async (searchText) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${searchText}&format=json`
      );
      if (!response.ok) {
        throw new Error('Error al obtener la lista de ciudades');
      }
      const data = await response.json();
      console.log(data);
      if (!data || data.length === 0) {
        throw new Error('La lista de ciudades está vacía');
      }
      const cities = data.map((location) => ({
        value: location.display_name,
        label: `${location.display_name}`,
        boundingBox: location.boundingbox, // Opcional: puedes incluir el boundingBox si es útil
      }));
      setCityOptions(cities);
    } catch (error) {
      console.error(error);
    }
  };
  
  

  // Función para obtener la lista de ciudades con debounce
  const debouncedFetchCities = debounce(fetchCities, 1000);

  return (
    <div className="container-all">
    <br></br>
    <h1 className="title-contacte">Inscripció HackEPS 2023</h1>
        <div className="form-container">
          <Formik
            initialValues={{
              studies: '',
              center: '',
              location: '',
              size: '',
              food:'',
              cvinfo: '',
              meet: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, setFieldValue }) => (
                <Form>
                    <div className="formik-field">
                        <label htmlFor="studies">Què estudies o has estudiat?</label>
                        <Field type="text" id="studies" name="studies" />
                        <ErrorMessage name="studies" component="div" className="error-message" />
                    </div>

                    <div className="formik-field">
                        <label htmlFor="center">Centre d'estudis:</label>
                        <Field type="text" id="center" name="center" />
                        <ErrorMessage name="center" component="div" className="error-message" />
                    </div>

                    <div className="formik-field">
                        <label htmlFor="location">D'on vens?:</label>
                        <Field name="location">
                          {({ field }) => (
                            <Select
                              {...field}
                              value={field.value} // Establece el valor seleccionado
                              options={cityOptions}
                              placeholder="Selecciona una ciudad"
                              onInputChange={(searchText) => debouncedFetchCities(searchText)}
                              onChange={(selectedOption) => {
                                // Establece el valor seleccionado en Formik
                                setFieldValue('location', selectedOption ? selectedOption.value : '');
                              }}
                            />
                          )}
                        </Field>

                        <ErrorMessage name="location" component="div" className="error-message" />
                    </div>

                    <div className="formik-field">
                        <label htmlFor="size">Talla de samarreta:</label>
                        <Select
                            id="size"
                            name="size"
                            options={sizeOptions}
                            placeholder="La meva talla de samarreta és..."
                            value={sizeOptions.find((option) => option.value === values.size)} // Obtenemos el valor seleccionado de Formik
                            onChange={(selectedOption) => setFieldValue('size', selectedOption.value)} // Actualizamos el valor en Formik
                        />
                        <ErrorMessage name="size" component="div" className="error-message" />
                    </div>

                    <div className="formik-field">
                        <label htmlFor="food">Tens alguna restricció alimentària o alèrgia?</label>
                        <Field type="text" id="food" name="food" />
                        <ErrorMessage name="food" component="div" className="error-message" />
                    </div>

                    <div className="formik-field">
                        <label htmlFor="meet">Com ens has conegut?</label>
                        <Select
                            id="meet"
                            name="meet"
                            options={meetOptions}
                            placeholder="Us he conegut per..."
                            value={meetOptions.find((option) => option.value === values.size)} // Obtenemos el valor seleccionado de Formik
                            onChange={(selectedOption) => setFieldValue('size', selectedOption.value)} // Actualizamos el valor en Formik
                        />
                    </div>
                    <div className="formik-field">
                        <label htmlFor="cvinfo_links">
                        Vols que les empreses de Lleida et coneguin? (Opcional)
                        </label>
                        <p className="subtitle">
                        Deixa'ns els enllaços dels teus projectes personals o les teves xarxes sociales
                        per a que les empreses patrocinadores puguin contactar-te
                        </p>
                        <Field as="textarea" id="cvinfo_links" name="cvinfo_links" rows="4" />
                    </div>

                    <div className="file-input-container">
                      <input
                        type="file"
                        name='cvinfo_file'
                        onChange={(event) => {
                          const file = event.target.files[0];
                          setFieldValue('cvinfo_file', file);
                          console.log(file);
                        }}
                      />
                      <span className="file-name">
                        {values.cvinfo_file ? values.cvinfo_file.name : 'Selecciona un arxiu'} 
                      </span>
                    </div>

              <ErrorMessage name="cvinfo_links" component="div" className="error-message" />
              <ErrorMessage name="cvinfo_file" component="div" className="error-message" />


                    <div className="button-submit-container">
                        <button className="button-submit" type="submit">Enviar</button>
                    </div>
                </Form>
            )}
          </Formik>
        </div>
    </div>
  );
};

export default InscripcioForm;
