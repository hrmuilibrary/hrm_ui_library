import{j as e}from"./jsx-runtime-DbpGMT4W.js";import{r as i}from"./iframe-Dbpxm-eK.js";import{M as C,N as I}from"./NestedMenu-X4n0Ommr.js";import{B as b}from"./Button-DJWR8OWo.js";import{I as y}from"./IconArrowDownloadFilled-4Ds7ozJh.js";import{I as g,a as h,b as x}from"./IconBeach-pRWKAeWY.js";import{I as M}from"./IconMore-01W8WL8I.js";import{I as O}from"./IconCheckmark-i_Du_ti_.js";import{I as n}from"./IconSettings-N-fpgAdK.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-DvOEX0aF.js";import"./index-CfDKhQPU.js";import"./Text-DioN7nhG.js";import"./helpers-CAk5zGnt.js";import"./index-AboGxAif.js";import"./types-DWP440wi.js";import"./index-DCSow1NP.js";import"./useOnOutsideClick-CPyxe03l.js";import"./CollapseGroup-Cr-EJs62.js";import"./Divider-DI_WKk2G.js";import"./AnimatePresenceWrapper-CWmpS8WI.js";import"./IconChevronDown-BbmOTecC.js";import"./IconChevronUp-Cbrc0NE0.js";import"./IconChevronRight-a3-kuTT9.js";import"./AvatarGroup-CF-UvSfy.js";import"./DropzoneFileUpload-BbdsWSNg.js";import"./Label-CgUpUYI9.js";import"./useFormProps-BsK4cpcR.js";import"./ErrorMessage-FQ3g0roC.js";import"./IconDynamicComponent-BHJtJQ2m.js";import"./Snackbar-Cmi3DbsK.js";import"./Alert-BfeiA0Ua.js";import"./IconDismissFilled-BCX3azx9.js";import"./Progress-BPhSMjzt.js";import"./IconAdd-B7FDAppr.js";import"./Checkbox-CnLD_Nd2.js";import"./Popover-q0Wg9BDX.js";import"./IconDismiss-CbBqVNWC.js";import"./Link-DKbtb3-7.js";import"./IconInfo-tp6zPI3G.js";const ve={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconMore
      }} />
        <_Menu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={items} isOpen={open} />
      </div>
    </div>;
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,f,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`(args: any) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div style={{
    display: 'flex',
    justifyContent: 'flex-end'
  }}>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconSettings
      }} type="tertiary" />
        <_NestedMenu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={NestedItems} isOpen={open} position="bottom-left" />
      </div>
    </div>;
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Ce=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,Ce as __namedExportsOrder,ve as default};
