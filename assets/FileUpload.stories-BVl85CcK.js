import{j as a}from"./jsx-runtime-DUoqHfTI.js";import{r as n}from"./iframe-lb_dILUR.js";import{F as u,a as x,b as g}from"./DropzoneFileUpload-CQA4funY.js";import{I as y}from"./IconInfo-Bi7ojP_l.js";import{F as b}from"./index-AboGxAif.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DH-fj3wa.js";import"./index-5MvGIPCt.js";import"./Label-BJhMevCW.js";import"./Text-CdChZzd0.js";import"./helpers-uo1c56Nd.js";import"./useFormProps-DnXWqu9z.js";import"./types-CvKYa35Y.js";import"./ErrorMessage-BVYX-oV0.js";import"./IconDynamicComponent-Cg_2CUIx.js";import"./IconArrowDownloadFilled-GX1Nm2Aq.js";import"./Snackbar-BJelbAuO.js";import"./Alert-DQk1JaFm.js";import"./IconDismissFilled-B10uyt0x.js";import"./Progress-D7gpXzai.js";const W={title:"FileUpload",component:u},w=t=>{const[o,l]=n.useState([]),e=s=>{s&&s.length&&l(s)};return a.jsx("div",{style:{width:400},children:a.jsx(u,{...t,getFiles:e,fileAllowedSize:9e6,uploadedFiles:o,onError:s=>console.log("type",s)})})},i=w.bind({});i.args={label:"Label",buttonText:"Attach file",isFileUploaded:!1,labelAddons:a.jsx(y,{size:"xsmall",type:"information",className:"ml-4"})};async function E(t,o){const e=await(await fetch(t)).blob();return new File([e],o,{type:e.type})}const U=[{name:"file1.jpeg",url:"https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},{name:"file2.jpeg",url:"https://images.unsplash.com/photo-1731505103716-7ee6fa96dee5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}],j=t=>{const[o,l]=n.useState([]);return n.useEffect(()=>{U.forEach(e=>{E(e.url,e.name).then(s=>{l(h=>[...h,s])})})},[]),a.jsx("div",{style:{width:800},children:a.jsx(x,{...t,setFiles:l,selectedFiles:o,maxSize:30*1024*1024,accept:[b.IMAGE],mode:g.attach,multiple:!1})})},r=j.bind({});r.args={};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,f,F;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
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
}`,...(F=(f=r.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};const Y=["FileUpload","DropzoneFileUpload"];export{r as DropzoneFileUpload,i as FileUpload,Y as __namedExportsOrder,W as default};
