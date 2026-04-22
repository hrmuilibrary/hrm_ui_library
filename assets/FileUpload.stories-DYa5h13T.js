import{j as a}from"./jsx-runtime-C69_ep2g.js";import{r as n}from"./iframe-B4kJE5yM.js";import{F as u,a as x,b as g}from"./DropzoneFileUpload-CQDE9o6R.js";import{I as y}from"./IconInfo-B2Xuahtu.js";import{F as b}from"./index-AboGxAif.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-3eBlV2bd.js";import"./index-BULsaNJl.js";import"./Label-BWRMk2tf.js";import"./Text-CmvpJS3M.js";import"./helpers-Dko3gFqJ.js";import"./useFormProps-DExDRcXs.js";import"./types-tju7SxMQ.js";import"./ErrorMessage-BX1FFgws.js";import"./IconDynamicComponent-DS9xoDNJ.js";import"./IconArrowDownloadFilled-BGr96Cg8.js";import"./Snackbar-qs9iEa94.js";import"./Alert-C2zOOhkk.js";import"./IconDismissFilled-BRzIioLt.js";import"./Progress-Bg8w1Q2v.js";const W={title:"FileUpload",component:u},w=t=>{const[o,l]=n.useState([]),e=s=>{s&&s.length&&l(s)};return a.jsx("div",{style:{width:400},children:a.jsx(u,{...t,getFiles:e,fileAllowedSize:9e6,uploadedFiles:o,onError:s=>console.log("type",s)})})},i=w.bind({});i.args={label:"Label",buttonText:"Attach file",isFileUploaded:!1,labelAddons:a.jsx(y,{size:"xsmall",type:"information",className:"ml-4"})};async function E(t,o){const e=await(await fetch(t)).blob();return new File([e],o,{type:e.type})}const U=[{name:"file1.jpeg",url:"https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},{name:"file2.jpeg",url:"https://images.unsplash.com/photo-1731505103716-7ee6fa96dee5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}],j=t=>{const[o,l]=n.useState([]);return n.useEffect(()=>{U.forEach(e=>{E(e.url,e.name).then(s=>{l(h=>[...h,s])})})},[]),a.jsx("div",{style:{width:800},children:a.jsx(x,{...t,setFiles:l,selectedFiles:o,maxSize:30*1024*1024,accept:[b.IMAGE],mode:g.attach,multiple:!1})})},r=j.bind({});r.args={};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
