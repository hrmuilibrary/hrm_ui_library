import{j as e}from"./jsx-runtime-hwX9V3EI.js";import{r as i}from"./iframe-Bgmt94v0.js";import{M as C,N as I}from"./NestedMenu-H7HvTDeF.js";import{B as b}from"./Button-t0A4OZ3E.js";import{I as y}from"./IconArrowDownloadFilled-pl2oAyCs.js";import{I as g,a as h,b as x}from"./IconBeach-ChHEjyj_.js";import{I as M}from"./IconMore-CBXWOJFt.js";import{I as O}from"./IconCheckmark-BOMz0olO.js";import{I as n}from"./IconSettings-CP8Eevdl.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-DxdoYt44.js";import"./index-BExM_KhQ.js";import"./Text-BQUHQN5O.js";import"./helpers-CDIMvFnB.js";import"./index-DYDl_GcV.js";import"./types-BlNiBLbf.js";import"./Popover-CM1M1Uce.js";import"./IconDismiss-q7dhilH3.js";import"./Link-BvemiQTT.js";import"./index-DvdIAn_G.js";import"./CollapseGroup-xXAhWhzZ.js";import"./Divider-Df_ANz57.js";import"./AnimatePresenceWrapper-DqeL9g6S.js";import"./IconChevronDown-CSEpZ54x.js";import"./IconChevronUp-CW3iU-P2.js";import"./IconChevronRight-CI7Pq4-y.js";import"./AvatarGroup-_Wriquif.js";import"./DropzoneFileUpload-JRyOlM74.js";import"./Label-Bkl8A_5Z.js";import"./useFormProps-sqPfNzmN.js";import"./ErrorMessage-DGfrKqGZ.js";import"./IconDynamicComponent-D4Ht04XP.js";import"./Snackbar-ph8EgU71.js";import"./Alert-DBWkq2gf.js";import"./IconDismissFilled-DQADTNHy.js";import"./Progress-Cr04DOSl.js";import"./IconAdd-CbF28iPJ.js";import"./Checkbox-DEssy2Th.js";import"./IconInfo-BOIFMgKC.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ve=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,ve as __namedExportsOrder,fe as default};
