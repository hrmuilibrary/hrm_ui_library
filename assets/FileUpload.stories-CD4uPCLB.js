import{j as a}from"./jsx-runtime-Kan_8xrb.js";import{r as p}from"./iframe-CoSMEsie.js";import{F,a as h,b as x}from"./DropzoneFileUpload-De---nQM.js";import{F as y}from"./index-AboGxAif.js";import{I as b}from"./IconUpload2-Bxc-CwTo.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-vf1Fpt4m.js";import"./index-DV_X6Qry.js";import"./Label-CB4NFAxp.js";import"./Text-ojGX6TEE.js";import"./helpers-DP7MF_vJ.js";import"./useFormProps-BGsr0HXU.js";import"./types-DTFyRcpY.js";import"./ErrorMessage-BUB1h4Qz.js";import"./IconDynamicComponent-CvKtQlK5.js";import"./IconArrowDownloadFilled-CVuOA-7T.js";import"./Snackbar-CApPu7mg.js";import"./Alert-CMpqQD6M.js";import"./IconDismissFilled-Cz4FgAuN.js";import"./Progress-B2wbEs2j.js";const V={title:"FileUpload",component:F,argTypes:{size:{options:["small","medium","large"],control:{type:"radio"}}}},w=t=>{const[s,l]=p.useState([]),e=o=>{o&&o.length&&l(o)};return a.jsx("div",{style:{width:400},children:a.jsx(F,{...t,getFiles:e,fileAllowedSize:9e6,uploadedFiles:s,onError:o=>console.log("type",o)})})},i=w.bind({});i.args={label:"Label",buttonText:"Import",isFileUploaded:!1,dataTestId:"file-upload",iconProps:{Component:b,size:"small"}};async function U(t,s){const e=await(await fetch(t)).blob();return new File([e],s,{type:e.type})}const E=[{name:"file1.jpeg",url:"https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},{name:"file2.jpeg",url:"https://images.unsplash.com/photo-1731505103716-7ee6fa96dee5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}],z=t=>{const[s,l]=p.useState([]);return p.useEffect(()=>{E.forEach(e=>{U(e.url,e.name).then(o=>{l(g=>[...g,o])})})},[]),a.jsx("div",{style:{width:800},children:a.jsx(h,{...t,setFiles:l,selectedFiles:s,maxSize:30*1024*1024,accept:[y.IMAGE],mode:x.attach,multiple:!1})})},r=z.bind({});r.args={dataTestId:"dz-file-upload"};var n,m,d;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  const [files, setFiles] = useState([]);
  const getFiles = _files => {
    if (_files && _files.length) {
      setFiles(_files);
    }
  };
  return <div style={{
    width: 400
  }}>
      <_FileUpload {...args} getFiles={getFiles} fileAllowedSize={9000000} uploadedFiles={files} onError={type => console.log('type', type)} />
    </div>;
}`,...(d=(m=i.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var c,f,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    mockFiles.forEach(file => {
      urlToFile(file.url, file.name).then(file => {
        setFiles(prev => [...prev, file]);
      });
    });
  }, []);
  return <div style={{
    width: 800
  }}>
      <_DropzoneFileUpload {...args} setFiles={setFiles} selectedFiles={files} maxSize={30 * 1024 * 1024} accept={[FileTypeEnum.IMAGE]} mode={FileUploadMode.attach} multiple={false}
    // maxFiles={2}
    />
    </div>;
}`,...(u=(f=r.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};const W=["FileUpload","DropzoneFileUpload"];export{r as DropzoneFileUpload,i as FileUpload,W as __namedExportsOrder,V as default};
