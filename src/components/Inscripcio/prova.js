<FormikStepper
      /// Accept all Formik props
      onSubmit={() => { console.log("submit!"); }} /// onSubmit Function
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
      withStepperLine /// false as default and If it is false, it hides stepper line
      nextButton={{ label: "Següent", style: {background: "var(--primary)"} }}
      prevButton={{ label: "Enrere", style: {background: "var(--primary)"} }}
      submitButton={{ label: "Envia", style: { background: "var(--primary)" } }}
    >
      <FormikStepper.Step label="Informació personal">
        <Row>
          <HackerPanel></HackerPanel>
          <Col>
            <h1 className='white-color'>Crear compte</h1>
            <InputField name="firstName" type="text" label="Nom" />
            <InputField name="lastName1" type="text" label="Cognom 1" />
            <InputField name="lastName2" type="text" label="Cognom 2" />
            <InputField name="birthDate" type="date" label="Data de naixement" />
          </Col>
        </Row>
      </FormikStepper.Step>
      <FormikStepper.Step label="Contacte">
        <Row>
          <HackerPanel></HackerPanel>
          <Col>
            <h1 className='white-color'>Crear compte</h1>
            <InputField name="phone" type="text" label="Telèfon" />
            <InputField name="email" type="email" label="E-mail" />
            <div>
              <SelectField
                name="shirtSize"
                label="Talla de samarreta"
                options={[
                  { value: "S", label: "S" },
                  { value: "M", label: "M" },
                  { value: "L", label: "L" },
                  { value: "XL", label: "XL" },
                ]}
              />
            </div>
          </Col>
        </Row>
      </FormikStepper.Step>
      <FormikStepper.Step label="Avatar" >
        <h1  className='white-color'>Crear compte</h1>
        <InputField name="avatarImage" type="text" label="Avatar" />
        <InputField name="nickname" type="text" label="Nickname" />
      </FormikStepper.Step>
    </FormikStepper>